import makeStore from "../hooks/useStore";

const storeDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null
}

const ActionType = {
    CHANGE_THEME: "CHANGE_THEME",
    LOGIN: "LOGIN",
    SESSION_LOGIN: "SESSION_LOGIN",
    SIGN_UP: "SIGN_UP"
}
const {
    CHANGE_THEME,
    LOGIN,
    SESSION_LOGIN,
    SIGN_UP
} = ActionType

const reducer = (state, action) => {
    // console.log('STATE:  ', state);
    // console.log('ACTION: ', action);
    switch (action.type) {
        case CHANGE_THEME: {
            const theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', theme);
            return {
                ...state,
                theme: theme
            };
        }
        case LOGIN: {
            return {
                ...state,
                user: action.payload
            }
        }
        case SESSION_LOGIN: {
            return {
                ...state,
                user: action.payload
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                user: action.payload
            }
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