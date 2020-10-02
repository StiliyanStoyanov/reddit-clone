export const validateUsername = async (value) => {
    const usernameRegex = /^[a-zA-Z0-9_-]*$/
    return usernameRegex.test(value);
}