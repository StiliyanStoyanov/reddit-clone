const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const validateUsername = require('./utils/validateUsername');

exports.createUser = functions.region('europe-west3').https.onCall(async (data, context) => {
  const email = data.email;
  const password = data.password;
  const username = data.username;
  const usersQuery = await admin.firestore().collection('users').where('username', '==', username).limit(1).get();
  const usernameExists = usersQuery.size > 0

  if (!email || !password || !username) {
    throw new functions.https.HttpsError('invalid-argument', 'missing username, email or password', {
      code: 'auth/missing-data',
      message: 'missing username, email or password'
    });
  }
  if (validateUsername(username)) {
    throw new functions.https.HttpsError('invalid-argument', 'The username is invalid', {
      code: 'auth/invalid-username',
      message: 'The username is invalid'
    });
  }
  if (usernameExists) {
    throw new functions.https.HttpsError('invalid-argument', 'The username is already in use by another account.', {
      code: 'auth/username-already-exists',
      message: 'The username is already in use by another account.'
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
  console.log(user);
  return { result: 'account creation successful' }
});
