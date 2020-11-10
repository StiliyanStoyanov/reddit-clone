const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccountKey = require('./config/serviceAccountKey.json');
const validateUsername = require('./utils/validateUsername');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  storageBucket: 'echo-blue.appspot.com'
});

exports.createUser = functions.region('europe-west3').https.onCall(async (data, context) => {
  const email = data.email;
  const password = data.password;
  const username = data.username;
  const usersQuery = await admin.firestore().collection('users').where('username', '==', username).limit(1).get();
  const usernameExists = usersQuery.size > 0

  if (!email || !password || !username) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing username, email or password', {
      code: 'auth/missing-data',
      message: 'Missing username, email or password'
    });
  }
  if (validateUsername(username)) {
    throw new functions.https.HttpsError('invalid-argument', 'The username is invalid', {
      code: 'auth/invalid-username',
      message: 'The username is invalid'
    });
  }
  if (usernameExists) {
    throw new functions.https.HttpsError('invalid-argument', 'The username is already in use by another account', {
      code: 'auth/username-already-exists',
      message: 'The username is already in use by another account'
    });
  }
  const user = await admin.auth().createUser({
    displayName: username,
    email: email,
    password: password
  }).catch(err => {
    console.log(err);
    throw new functions.https.HttpsError('invalid-argument', err.message, err.errorInfo);
  });
  await admin.firestore().collection('users').doc(user.uid).set({
    username: username,
    communitiesFollowed: []
  });
  return { result: 'account creation successful' }
});

exports.createCommunity = functions.region('europe-west3').https.onCall(async (data, context) => {
  const invalidDataError = () => {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid community name, topic or description text', {
      code: 'create-community/missing-data',
      message: 'Invalid community name, topic or description text'
    });
  }
  const parseAdditionalTopics = (topicsArrayJSON) => {
    try {
      return JSON.parse(topicsArrayJSON);
    } catch (e) {
      return invalidDataError();
    }
  }
  const user = context.auth
  const communitiesCollection = admin.firestore().collection('communities');
  const userCollection = admin.firestore().collection('users');
  const isValidCommunityNameRegex = /^(?=.{3,24}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/
  const {communityName, primaryTopic, descriptionText} = data
  const additionalTopics = parseAdditionalTopics(data.additionalTopics);
  if (!user) {
    throw new functions.https.HttpsError('invalid-argument','Only authenticated users can create a creating a community', {
      code: 'auth/unauthorized',
      message: 'Only authenticated users can create a creating a community'
    });
  }
  if (!communityName || !primaryTopic || !descriptionText) {
    invalidDataError()
  }
  if (!isValidCommunityNameRegex.test(communityName) || !descriptionText || typeof descriptionText !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid community name, topic or description text', {
      code: 'create-community/missing-data',
      message: 'Invalid community name, topic or description text'
    });
  }
  const community = await communitiesCollection.doc(communityName).get();
  if (community.exists) {
    throw new functions.https.HttpsError('invalid-argument', 'The community name is already taken', {
      code: 'create-community/community-already-exists',
      message: 'The community name is already taken'
    });
  }
  const bucket = admin.storage().bucket();
  const file = await bucket.file('public/globe.svg');
  const signedUrl = await file.getSignedUrl({action: 'read', expires: '1/12/2200'});
  const newCommunity = { 
    owner: user.token.name,
    subscribers: 0,
    primaryTopic: primaryTopic,
    additionalTopics: additionalTopics,
    created: new Date(Date.now()),
    about: descriptionText,
    title: communityName,
    imageUrl: signedUrl[0],
    name: communityName,
    queryParam: communityName[0],
    moderators: []
  }
  const newCommunityRef = communitiesCollection.doc(communityName);
  await newCommunityRef.set(newCommunity).catch(err => {
    throw new functions.https.HttpsError('invalid-argument', 'Something went wrong please try again later', {
      code: 'create-community/failed-to-create-community',
      message: 'Something went wrong please try again later'
    });
  });
  
  await userCollection.doc(user.uid)
  .update({
    subscriptions: admin.firestore.FieldValue.arrayUnion(newCommunityRef),
    communitiesOwned: admin.firestore.FieldValue.arrayUnion(newCommunityRef),
  }).catch(e => {
    newCommunityRef.delete();
    throw new functions.https.HttpsError('invalid-argument', 'Something went wrong please try again later', {
      code: 'create-community/failed-to-create-community',
      message: 'Something went wrong please try again later'
    });
  });
  return {...newCommunity, created: newCommunity.created.getTime()}
})
