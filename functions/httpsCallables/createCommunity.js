const functions = require('firebase-functions');
const admin = require('firebase-admin');
const httpsError = require('../utils/httpsError');
const {v4: uuid4} = require('uuid');
const {pipeline} = require('stream')
// https://stackoverflow.com/questions/42956250/get-download-url-from-file-uploaded-with-cloud-functions-for-firebase
// https://www.sentinelstand.com/article/guide-to-firebase-storage-download-urls-tokens
module.exports = functions.region('europe-west3').https.onCall(async (data, context) => {
    if (!context.auth) return httpsError('unauthenticated', 'The request does not have valid authentication credentials for the operation.')
    // let keys = [
    //     'id', 'name', 'ownerId', 'about',
    //     'createdAt', 'primaryCategory', 'categories', 'queryParam',
    //     'subscribers', 'title', 'imageUrl'
    // ];
    // const left = ['subscribers', 'cratedAt', 'queryParam', 'imageUrl', 'ownerId', 'title']
    const {communityName, communityDescription, primaryTopic, options} = data
    const arguments = [communityName, communityDescription, primaryTopic];
    const invalidArguments = arguments.some(argument => {
        return !argument || typeof argument !== "string" || !argument.trim();
    })
    const invalidOptions = !Array.isArray(options) || options.length > 10
    if (invalidArguments || invalidOptions) {
        return httpsError('invalid-argument', 'The request has invalid fields.')
    }
    const verifyId = /^(?=.{3,24}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/;
    if (!verifyId.test(communityName)) {
        return httpsError('invalid-argument', 'The requested community name is invalid.')
    }

    const firestore = admin.firestore();
    const communityRef = firestore.doc(`communities/${communityName}`);
    const communityInFirestore = await communityRef.get();
    if (communityInFirestore.exists) {
        return httpsError('already-exists', 'The community name already exists.');
    }
    const uuid = uuid4();
    const metadata = {
        metadata: {
            public: true,
            predefinedAcl: 'publicRead',
            contentType: 'image/svg+xml',
            metadata: {
                firebaseStorageDownloadTokens: uuid,
                uid: context.auth.uid
            }
        }
    }
    const bucket = admin.storage().bucket();
    const copyLocation = `communities/${communityName}/icon`
    const globeCopy = bucket.file(copyLocation);
    const globeWriteStream = globeCopy.createWriteStream(metadata);
    const globeReadStream = bucket.file('public/globe.svg').createReadStream({
        validation: false
    });
    function copyGlobe() {
        return new Promise((resolve, reject) => {
            pipeline(
                globeReadStream,
                globeWriteStream,
                err => {
                    if (err) {
                        reject(err);
                        console.error('Pipeline failed.', err);
                    } else {
                        resolve();
                        console.log('Pipeline succeeded.')
                    }
                }
            )
        });
    }
    // function copyFile() {
    //     return bucket.file(fileLocation).copy(bucket.file(copyLocation, metadata));
    // }
    // await copyFile();

    return copyGlobe()
        .then(async () => {
            const [metadata] = await globeCopy.getMetadata();
            const batch = firestore.batch();
            const categories = options.filter(category => typeof category === "string").map(category => {
                return category.toLowerCase().replace(/ /g,'_');
            })
            categories.push(primaryTopic.toLowerCase().replace(/ /g,'_'))
            const community = {
                id: communityName,
                name: communityName,
                about: communityDescription.trim().replace(/\s+/g, ' '),
                primaryCategory: primaryTopic,
                categories,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                imageUrl: metadata.mediaLink,
                admin: context.auth.uid,
                queryParam: communityName[0].toLowerCase(),
                subscribers: 1,
                title: communityName
            }
            const subscriptionsRef = firestore.doc(`users/${context.auth.uid}/subscriptions/${communityName}`)
            const subscription = {
                id: communityName,
                isFavourite: false,
                imageUrl: metadata.mediaLink
            }
            batch.set(communityRef, community);
            batch.set(subscriptionsRef, subscription);
            return batch.commit().then(() => {
                return {
                    ...community,
                    createdAt: admin.firestore.Timestamp.now()
                }
            }).catch(err => {
                console.error(err);
                return httpsError('internal', 'batch failed');
            })
        })
        .catch(err => {
            console.error(err);
            return httpsError('internal', 'Failed to copy globe')
        })
})