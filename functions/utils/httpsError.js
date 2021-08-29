const functions = require('firebase-functions');
// https://firebase.google.com/docs/reference/functions/providers_https_.httpserror
// https://github.com/grpc/grpc/blob/master/doc/statuscodes.md
module.exports = function httpsError(code, message, details) {
    throw new functions.https.HttpsError(code, message, details || {code, message});
}