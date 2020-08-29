import makeStore from "../hooks/useStore";

const storeDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null
}

const ActionType = {
    CHANGE_THEME: "CHANGE_THEME",
    SESSION_LOGIN: "SESSION_LOGIN",
}
const {
    CHANGE_THEME,
    SESSION_LOGIN,
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