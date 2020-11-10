export function validateCommunityName(communityName) {
    const isValidCommunityNameRegex = /^(?=.{3,24}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/
    if (!isValidCommunityNameRegex.test(communityName)) {
        return 'Community name has invalid characters';
    }
    return true;
}