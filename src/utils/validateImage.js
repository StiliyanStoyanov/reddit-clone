// https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files
// https://www.cluemediator.com/validate-image-content-in-reactjs
import {formatBytes} from "./formatBytes";
const fileErrors = {
    missingFile: {
        type: 'file/missing-file',
        message: 'File is missing'
    },
    invalidContentType: (allowed) => ({
        type: 'file/invalid-content-type',
        message: `Invalid content types. The allowed content types are ${allowed.join(', ')}.`

    }),
    maxSizeExceeded: (maxSize) => ({
        type: 'file/maximum-size-exceeded',
        message: `The file exceeds the allowed size of ${formatBytes(maxSize)}.`
    }),
    invalidFile: {
        type: 'file/invalid-file',
        message: 'Invalid file content'
    }
}
export async function validateImage(file, allowedTypes = ['png','jpg','jpeg'], maxSize = 5 * 1024 * 1024) {
    const accept = allowedTypes.map(type => `image/${type}`)
    if (!file) return [null, fileErrors.missingFile]
    if (!accept.some(contentType => contentType === file.type)) {
        return [null, fileErrors.invalidContentType(allowedTypes)]
    }
    if (file.size > maxSize) return [null, fileErrors.maxSizeExceeded(maxSize)]
    try {
        const dataUrl = await readFileAsync(file);
        return [dataUrl, null]
    } catch (error) {
        return [null, error]
    }
}
function readFileAsync(file) {
    return new Promise(((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = String(e.target.result);
            img.onload = () => {
                resolve(e.target.result);
            }
            img.onerror = () => {
                reject(fileErrors.invalidFile);
            }
        };
        reader.readAsDataURL(file);
    }));
}