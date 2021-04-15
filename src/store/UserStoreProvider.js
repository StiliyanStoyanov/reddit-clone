import makeStore from "../hooks/makeStore";

const userStoreDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null,
    username: '',
    isLoading: true
}

const userStoreActionTypes = {
    changeTheme: "CHANGE_THEME",
    sessionLogin: "SESSION_LOGIN",
    logout: "LOGOUT",
}
const {
    changeTheme,
    sessionLogin,
    logout
} = userStoreActionTypes

const reducer = (state, action) => {
    switch (action.type) {
        case changeTheme: {
            const theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', theme);
            return {
                ...state,
                theme: theme
            };
        }
        case sessionLogin: {
            const {user} = action.payload;

            return {
                ...state,
                user: user,
                username: user.displayName,
                isLoading: false
            };
        }
        case logout: {
            if (state.user === null) return state;
            return {
                ...userStoreDefault,
                isLoading: false
            };
        }
        default: {
            console.error("Invalid user store action type");
            return state
        }
    }
}

const [
    UserStoreProvider,
    useUserStore,
    useUserDispatch
] = makeStore(reducer, userStoreDefault);

export {UserStoreProvider, useUserStore, useUserDispatch, userStoreActionTypes}