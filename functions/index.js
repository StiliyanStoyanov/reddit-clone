const admin = require('firebase-admin');
admin.initializeApp();
exports.createUser = require('./httpsCallables/createUser');
exports.createCommunity = require('./httpsCallables/createCommunity');

