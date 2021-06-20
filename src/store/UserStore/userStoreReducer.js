import {userStoreActions} from "./userStoreActions";
const {
    changeTheme,
    setUser,
    setUserFirestore,
    setView,
    setSort,
    resetSortAndView,
    logout
} = userStoreActions
export const userStoreDefault = {
    theme: localStorage.getItem('theme') || 'dark',
    user: null,
    username: null,
    uid: null,
    avatarUrl: null,
    preferredSort: 'top',
    preferredView: 'card',
    createdAt: null,
    sort: 'top',
    view: 'card',
    about: '',
    isLoadingFirestore: true,
    isLoading: true
}
export const userStoreReducer = (state, action) => {
    switch (action.type) {
        case changeTheme: {
            const theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', theme);
            return {
                ...state,
                theme: theme
            };
        }

        case setUserFirestore: {
            return {
                ...state,
                ...action.payload,
                sort: action.payload.preferredSort || "top",
                view: action.payload.preferredView || "card",
                isLoadingFirestore: false
            };
        }
        case setUser: return {...state, user: action.payload, isLoading: false}
        case setView: return {...state, view: action.payload}
        case setSort: return {...state, sort: action.payload}
        case resetSortAndView: return {...state, sort: state.preferredSort, view: state.preferredView}
        case logout: return {...userStoreDefault, isLoading: false, isLoadingFirestore: false};
        default: {
            console.error("Invalid user store action type");
            return state
        }
    }
}

