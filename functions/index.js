const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(request);
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// TODO: Auth functions do not work with the emulators test after deploy
//  - additional actions on user signup can be used here instead on the client
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
  console.log(user);
});
