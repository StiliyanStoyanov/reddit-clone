import {createContext, useContext} from "react";
import {useFetchCollection, fetchCollectionActions, sorts} from "../hooks/useFetchCollection/useFetchCollection";
const postsActions = fetchCollectionActions;
const storeContext = createContext({});
const dispatchContext = createContext({});
const PostsStoreProvider = ({ children }) => {
    const [store, dispatch] = useFetchCollection(null, null);
    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={store}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}
function usePostsStore() {
    return useContext(storeContext);
}
function usePostsDispatch() {
    return useContext(dispatchContext);
}
export {PostsStoreProvider, usePostsStore, usePostsDispatch, postsActions, sorts}