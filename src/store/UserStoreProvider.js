import React, {createContext, useContext, useEffect, useReducer} from "react";
import {auth, firestore} from "../firebase";
const userStoreDefault = {
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

const userStoreActions = {
    changeTheme: "CHANGE_THEME",
    setUser: "SET_USER",
    setUserFirestore: "SET_USER_FIRESTORE",
    setView: "SET_VIEW",
    setSort: "SET_SORT",
    resetSortAndView: "RESET_SORT_AND_VIEW",
    logout: "LOGOUT",
}
const {
    changeTheme,
    setUser,
    setUserFirestore,
    setView,
    setSort,
    resetSortAndView,
    logout
} = userStoreActions

const userStoreReducer = (state, action) => {
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

const storeContext = createContext({});
const dispatchContext = createContext({});
const UserStoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(userStoreReducer, userStoreDefault);
    const {user, isLoading} = store

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch({
                    type: setUser,
                    payload: user
                });
            } else {
                dispatch({type: logout});
            }
        });
        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    useEffect(() => {
        if (isLoading) return;
        if (!user) return dispatch({type: logout})

        const path = firestore.doc(`/users/${user.uid}`);
        const unsubscribe = path.onSnapshot(userSnapshot => {
            if (userSnapshot.exists) {
                console.log(userSnapshot.data());
                dispatch({type: setUserFirestore, payload: {}});
            }
        });
        return () => {
            unsubscribe();
        };
    }, [user, isLoading]);
    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={store}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}
function useUserStore() {
    return useContext(storeContext);
}
function useUserDispatch() {
    return useContext(dispatchContext);
}

export {UserStoreProvider, useUserStore, useUserDispatch, userStoreActions}