import {createContext, useContext, useEffect, useReducer} from "react";
import {userStoreReducer, userStoreDefault} from "./userStoreReducer";
import {auth, firestore} from "../../firebase";
import {logout, setUser, setUserFirestore} from "./userStoreActions";

const storeContext = createContext({});
const dispatchContext = createContext({});
const UserStoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(userStoreReducer, userStoreDefault);
    const {user, isLoading} = store

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user))
            } else {
                dispatch(logout())
            }
        });
        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    useEffect(() => {
        if (isLoading) return;
        if (!user) return dispatch(logout())

        const path = firestore.doc(`/users/${user.uid}`);
        const unsubscribe = path.onSnapshot(userSnapshot => {
            if (userSnapshot.exists) {
                dispatch(setUserFirestore(userSnapshot.data()));
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

export {UserStoreProvider, useUserStore, useUserDispatch}