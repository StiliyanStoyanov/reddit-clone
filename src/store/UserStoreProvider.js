import makeStore from "../hooks/makeStore";
import firebase from "../firebase";

const userStoreDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null,
    username: '',
    communitiesOwned: [],
    subscriptions: [],
    subscriptionsData: [],
    moderatorIn: [],
    isLoading: true
}

const UserStoreActionTypes = {
    CHANGE_THEME: "CHANGE_THEME",
    SESSION_LOGIN: "SESSION_LOGIN",
    UPDATE_SUBSCRIPTIONS_DATA: "UPDATE_SUBSCRIPTIONS_DATA",
    LOGOUT: "LOGOUT",
    SET_LOADING: "SET_LOADING"
}
const {
    CHANGE_THEME,
    SESSION_LOGIN,
    UPDATE_SUBSCRIPTIONS_DATA,
    LOGOUT,
    SET_LOADING
} = UserStoreActionTypes

const reducer = (state, action) => {
    const {payload} = action
    switch (action.type) {
        case CHANGE_THEME: {
            const theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', theme);
            return {
                ...state,
                theme: theme
            };
        }
        case UPDATE_SUBSCRIPTIONS_DATA: {
            return {
                ...state,
                subscriptions: [
                    ...state.subscriptions,
                    firebase.firestore().collection('communities').doc(payload.name)
                ],
                subscriptionsData: [
                    ...state.subscriptionsData,
                    {...action.payload}
                ]

            }
        }
        case SESSION_LOGIN: {
            return {
                ...state,
                ...payload.userData,
                user: action.payload.user,
                username: action.payload.user.displayName,
                isLoading: false
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case LOGOUT: {
            return userStoreDefault
        }
        default: {
            console.error("Invalid Action Type");
            return state
        }
    }
}

const [
    UserStoreProvider,
    useUserStore,
    useUserDispatch
] = makeStore(reducer, userStoreDefault);

export {UserStoreProvider, useUserStore, useUserDispatch, UserStoreActionTypes}