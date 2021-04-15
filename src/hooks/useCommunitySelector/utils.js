export const isLetter = string => /^[a-zA-Z]/.test(string);

export const findFirstLetter = string => {
    const regex = /[a-zA-Z]/
    if (regex.test(string)) {
        return string[0];
    }
    return false;
}


