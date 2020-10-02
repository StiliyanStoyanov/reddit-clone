export function validateForm (postStore, communitiesFollowed) {
    const {
        selectedFormType,
        selectedCommunity,
        imageFile,
        linkContent,
        title,
        queriedCommunities
    } = postStore
    const isBlank = str => (!str || /^\s*$/.test(str));
    if (!isBlank(selectedCommunity) && !isBlank(title)) {
        if (communitiesFollowed.some(community => community.name === selectedCommunity) || queriedCommunities.some(community => community.name === selectedCommunity)) {
            switch (selectedFormType) {
                case 'post':
                    return true;
                case 'image':
                    return !!imageFile;
                case 'link':
                    return !isBlank(linkContent);
                default:
                    return console.error('Something went wrong with post validation');
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
export function selectSubmitContent (postStore) {
    const {selectedFormType, postContent, imageContent, linkContent} = postStore
    switch (selectedFormType) {
        case 'post':
            return postContent
        case 'image':
            return imageContent
        case 'link':
            return linkContent
        default:
            console.error('Invalid Form Type Selector');
    }
}