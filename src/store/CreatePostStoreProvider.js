import makeStore from "../hooks/makeStore";
export const createPostStoreActions = {
    setCommunity: "SET_COMMUNITY",
    clearCommunity: "CLEAR_COMMUNITY",
    changeForm: "CHANGE_FORM",
    updateTitle: "UPDATED_TITLE",
    updatePostContent: "UPDATE_POST_CONTENT",
    updateImageContent: "UPDATED_IMAGE_CONTENT",
    updateLinkContent: "UPDATE_LINK_CONTENT",
    clearImageContent: "CLEAR_IMAGE_CONTENT",
}
const {
    setCommunity,
    clearCommunity,
    changeForm,
    updateTitle,
    updatePostContent,
    updateImageContent,
    updateLinkContent,
    clearImageContent
} = createPostStoreActions

const postStoreDefault = {
    community: null,
    activeForm: 'post',
    title: '',
    postContent: '',
    imageFile: null,
    imageDataUrl: null,
    linkContent: '',
}

const postStoreReducer = (state, action) => {
    switch (action.type) {
        case changeForm: {
            const {activeForm} = state;
            const {switchTo} = action.payload;
            if (switchTo === activeForm) return state
            return {
                ...state,
                activeForm: switchTo
            };
        }
        case updateTitle: {
            const {title} = state
            const {userInput} = action.payload;
            if (title === userInput) return state;

            return {
                ...state,
                title: userInput
            };
        }
        case updatePostContent: {
            const {postContent} = state;
            const {userInput} = action.payload
            if (postContent === userInput) return state;
            return {
                ...state,
                postContent: userInput
            };
        }
        case updateLinkContent: {
            const {linkContent} = state;
            const {userInput} = action.payload;
            if (linkContent === userInput) return state;
            return {
                ...state,
                linkContent: userInput
            };
        }
        case updateImageContent: {
            const {imageFile, imageDataUrl} = action.payload;
            if (!imageFile || !imageDataUrl) return state;
            return {
                ...state,
                imageFile: imageFile,
                imageDataUrl: imageDataUrl
            };
        }
        case clearImageContent: {
            const {imageFile, imageDataUrl} = state;
            if (!imageFile || !imageDataUrl) return state;
            return {
                ...state,
                imageFile: null,
                imageDataUrl: null
            };
        }
        case setCommunity: {
            const {selectedCommunity} = state;
            const {community} = action.payload
            if (selectedCommunity === community) return state;
            return {
                ...state,
                community: community
            };

        }
        case clearCommunity: {
            return {...state, community: null}
        }
        default: {
            console.error("Invalid Reducer Case!!");
            return state
        }
    }
}

const [
    CreatePostStoreProvider,
    usePostStore,
    usePostDispatch
] = makeStore(postStoreReducer, postStoreDefault);

export {CreatePostStoreProvider, usePostStore, usePostDispatch}