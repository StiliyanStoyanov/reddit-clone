import {communityStoreActions} from "../CommunityStore/CommunityStoreProvider";
const {setCommunity, setLoading, clearCommunity} = communityStoreActions
const communitiesStoreDefault = {
    communities: [],
    isLoading: true
}
const communitiesStoreReducer = (state, action) => {
    switch (action.type) {
        case setCommunity: {
            return {
                community: action.payload,
                isLoading: false
            }
        }
        case setLoading: {
            return {
                ...state,
                isLoading: true
            }
        }
        case clearCommunity: {
            return {
                ...state,
                community: null,
                isLoading: false
            };
        }
        default: {
            console.error("Invalid community store action");
            return state
        }
    }
}