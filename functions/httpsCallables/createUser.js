const functions = require('firebase-functions');
const admin = require('firebase-admin');
const jdenticon = require("jdenticon");
const {v4: uuid4} = require('uuid');
const httpsError = require('../utils/httpsError');
// https://stackoverflow.com/questions/42956250/get-download-url-from-file-uploaded-with-cloud-functions-for-firebase
// https://www.sentinelstand.com/article/guide-to-firebase-storage-download-urls-tokens
module.exports = functions.region('europe-west3').https.onCall(async (data, context) => {
    const regex = /[a-zA-Z_-]{3,24}/
    const {username, email, password} = data
    if (!username || !email || !password) {
        return httpsError('invalid-argument', 'Missing username, email or password')
    } else if (!regex.test(username)) {
        return httpsError('invalid-argument', 'The username is invalid')
    }
    const auth = admin.auth();
    const bucket = admin.storage().bucket();
    const filename = `users/${username}/avatar`
    const file = bucket.file(filename);
    const uuid = uuid4();
    const size = 256;
    const jdentPngBuffer = jdenticon.toPng(username, size);
    try {
        await auth.createUser({
            uid: username,
            displayName: username,
            password: password,
            email: email
        })
        await file.save(jdentPngBuffer, {
            resumable: false,
            predefinedAcl: 'publicRead',
            metadata: {
                contentType: 'image/png',
                metadata: {
                    firebaseStorageDownloadTokens: uuid
                }
            }
        })
        const [metadata] = await file.getMetadata();
        const user = {
            uid: username,
            username: username,
            avatarUrl: metadata.mediaLink,
            preferredSort: "top",
            preferredView: "card",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            about: ""
        }
        await admin.firestore().doc(`/users/${username}`).set(user);
        return user;
    } catch (e) {
        console.error(e);
        switch (e.code) {
            case "auth/invalid-email": {
                return httpsError('invalid-argument', e.message, {code: e.code, message: e.message})
            }
            case "auth/email-already-exists": {
                return httpsError('invalid-argument', e.message, {code: e.code, message: e.message})
            }
            case "auth/invalid-password": {
                return httpsError('invalid-argument', e.message, {code: e.code, message: e.message})
            }
            case "auth/uid-already-exists": {
                return httpsError('already-exists', e.message, {code: e.code, message: e.message})
            }
            default: {
                return httpsError('internal', e.message, {code: e.code, message: e.message})
            }
        }
    }
})