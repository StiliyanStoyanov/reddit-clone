// https://mathiasbynens.be/demo/url-regex
// https://gist.github.com/dperini/729294#file-regex-weburl-js
// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
// https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
export const urlConstructor = (string) => {
    let url;
    try {
        url = new URL(string);
        if (url.protocol.includes('javascript')) {
            url.href = 'https://stackoverflow.com/a/43467144'
        }
    }
    catch (err) {
        return false;
    }

    return url;
}


export function urlRegex(string) {
    const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/
    return urlRegex.test(string);
}
