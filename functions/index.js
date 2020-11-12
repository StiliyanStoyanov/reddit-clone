const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert('./config/serviceAccountKey.json'),
  storageBucket: 'echo-blue-development.appspot.com'
});

const createUser = require('./createUser');
const createCommunity = require('./createCommunity');

exports.createUser = createUser
exports.createCommunity = createCommunity