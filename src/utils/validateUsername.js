export const validateUsername = async (value) => {
    const usernameRegex = /[a-zA-Z0-9_-]+/
    if (!usernameRegex.test(value)) {
        return 'Only letters, numbers, dashes and underscores allowed'
    }
    return true
}