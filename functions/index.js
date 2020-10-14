const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccountKey = require('./config/serviceAccountKey.json');
const validateUsername = require('./utils/validateUsername');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  storageBucket: 'echo-blue.appspot.com'
});
const db = admin.firestore();

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
  const user = context.auth
  const communitiesCollection = db.collection('communities');
  const isValidCommunityNameRegex = /^(?=.{3,24}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/
  const {communityName, topics, descriptionText} = data
  if (!user) {
    throw new functions.https.HttpsError('Only authenticated users can create a creating a community', {
      code: 'auth/unauthorized',
      message: 'Only authenticated users can create a creating a community'
    });
  }
  if (!communityName || !topics || !descriptionText) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing community name, topic or description text', {
      code: 'create-community/invalid-data',
      message: 'Missing community name, topic or description text'
    });
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
  const signedUrl = await file.getSignedUrl({action: 'read',expires: '1/12/2200'});
  const newCommunity = { 
    owner: user.token.name,
    membersCount: 0,
    topics: topics,
    created: admin.firestore.FieldValue.serverTimestamp(),
    about: descriptionText,
    title: communityName,
    imageUrl: signedUrl[0],
    name: communityName,
    queryParam: communityName[0],
    moderators: []
  }
  await communitiesCollection.doc(communityName)
  .set(newCommunity)
  .catch(err => {
    console.error(err)
    throw new functions.https.HttpsError('invalid-argument', 'Something went wrong please try again later', {
      code: 'create-community/failed-to-create-community',
      message: 'Something went wrong please try again later'
    });
  });
  return newCommunity
})
