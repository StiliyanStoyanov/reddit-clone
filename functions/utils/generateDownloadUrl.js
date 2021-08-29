module.exports = createPersistentDownloadUrl = (bucket, pathToFile, downloadToken) => {
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
        pathToFile
    )}?alt=media&token=${downloadToken}`;
};