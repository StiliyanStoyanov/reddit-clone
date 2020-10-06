import makeStore from "../hooks/useStore";

const storeDefault = {
    selectedFormType: 'post',
    selectedCommunity: null,
    title: '',
    postContent: '',
    imageFile: null,
    imageDataUrl: null,
    linkContent: '',
    queriedCommunities: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FORM_TYPE": {
            return {...state, selectedFormType: action.payload}
        }
        case "CHANGE_TITLE": {
            return {...state, title: action.payload}
        }
        case "CHANGE_POST_CONTENT": {
            return {...state, postContent: action.payload}
        }
        case "CHANGE_IMAGE_CONTENT": {
            return {...state, imageFile: action.payload.file, imageDataUrl: action.payload.imageDataUrl}
        }
        case "CLEAR_IMAGE_CONTENT": {
            return {...state, imageFile: null, imageDataUrl: null}
        }
        case "CHANGE_LINK_CONTENT": {
            return {...state, linkContent: action.payload}
        }
        case "SELECT_COMMUNITY": {
            return {...state, selectedCommunity: action.payload}
        }
        case "CLEAR_COMMUNITY": {
            return {...state, selectedCommunity: null}
        }
        default: {
            console.error("Invalid Reducer Case");
            return state
        }
    }
}

const [
    PostStoreProvider,
    usePostStore,
    usePostDispatch
] = makeStore(reducer, storeDefault);

export {PostStoreProvider, usePostStore, usePostDispatch}