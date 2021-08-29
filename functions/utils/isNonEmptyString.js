module.exports = function isNonEmptyString(argument) {
    if (typeof argument === "string") {
        return !argument.trim();
    } else if (Array.isArray(argument)) {
        argument.some(item => typeof item !== "string" || !item.trim())
    } else {
        console.warn("invalid argument provided this function only works with string or arrays")
        return false
    }
};