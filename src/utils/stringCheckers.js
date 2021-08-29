// https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript

// For checking if a string is blank or contains only white-space:
export function isEmpty(string) {
    return (string.length === 0 || !string.trim());
}

// For checking if a string is blank, null or undefined
export function isBlank(string) {
    return (!string || /^\s*$/.test(string));
}