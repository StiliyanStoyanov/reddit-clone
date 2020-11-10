export function validateTopicsLimit(topicsList) {
    const list = JSON.parse(topicsList);
    if (list.length > 25) {
        return 'The maximum additional topics per community is 25';
    }
    return true;
}