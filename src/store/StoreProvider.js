import makeStore from "../hooks/useStore";

const storeDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null,
    userExtraData: {
        communitiesFollowed: [],
        username: ''
    },
    loadingUserData: true
}

const ActionType = {
    CHANGE_THEME: "CHANGE_THEME",
    SESSION_LOGIN: "SESSION_LOGIN",
    UPDATE_USER: "UPDATE_USER",
    LOGOUT: "LOGOUT",
    LOADING_USER_DATA: "LOADING_USER_DATA"
}
const {
    CHANGE_THEME,
    SESSION_LOGIN,
    UPDATE_USER,
    LOGOUT,
    LOADING_USER_DATA
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
                    username: action.payload.displayName,
                    communitiesFollowed: state.userExtraData.communitiesFollowed
                }
            }
        }
        case UPDATE_USER: {
            return {
                ...state,
                userExtraData: {
                    username: state.userExtraData.username,
                    communitiesFollowed: [...action.payload]
                }
            }
        }
        case LOADING_USER_DATA: {
            return {...state, loadingUserData: action.payload}
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