import makeStore from "../hooks/useStore";

const storeDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null,
    userExtraData: {
        communitiesFollowed: [],
        username: ''
    }
}

const ActionType = {
    CHANGE_THEME: "CHANGE_THEME",
    SESSION_LOGIN: "SESSION_LOGIN",
    UPDATE_USER: "UPDATE_USER",
    LOGOUT: "LOGOUT"
}
const {
    CHANGE_THEME,
    SESSION_LOGIN,
    UPDATE_USER,
    LOGOUT
} = ActionType

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            const theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', theme);
            return {
                ...state,
                theme: theme
            };
        }
        case SESSION_LOGIN: {
            return {
                ...state,
                user: action.payload,
                userExtraData: {
                    username: action.payload.displayName || "Unknown",
                    communitiesFollowed: state.userExtraData.communitiesFollowed
                }
            }
        }
        case UPDATE_USER: {
            return {
                ...state,
                userExtraData: {
                    username: state.userExtraData.username,
                    communitiesFollowed: [...state.userExtraData.communitiesFollowed, action.payload]
                }
            }
        }
        case LOGOUT: {
            return storeDefault
        }
        default: {
            console.error("Invalid Reducer Action Type");
            return state
        }
    }
}

const [
    StoreProvider,
    useStore,
    useDispatch
] = makeStore(reducer, storeDefault);

export {StoreProvider, useStore, useDispatch, ActionType}