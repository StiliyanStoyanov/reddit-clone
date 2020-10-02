module.exports = validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z0-9_-]*$/
    return !usernameRegex.test(value);
}