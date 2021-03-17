import {useEffect, useReducer, useRef} from "react";
import {firestore} from "../../firebase";
import {fetchPostsReducer, initialState, init, actions} from "./fetchPostsReducer";
const {
    setData,
    updateData,
    loadMore,
    initFetch,
    setFetching,
    setError,
    setIdle,
    setLastIndex,
    setCommunityNotFound,
    setCommunity
} = actions

export function useFetchPosts(sort, baseLocation, communityId) {
    const isInitialMount = useRef(true);
    const [state, dispatch] = useReducer(fetchPostsReducer, initialState, init);
    const {
        data,
        community,
        startAfterIndex,
        isLoading,
        isFetching,
        isError,
        isLastIndex,
        communityNotFound,
        query
    } = state
    const fetchLocation = baseLocation === "/e/:id"
        ? firestore.collection(`communities/${communityId}/posts`)
        : baseLocation === "/"
            ? firestore.collectionGroup('posts')
            : null;
    const limit = 5;
    const newSort = fetchLocation && fetchLocation.orderBy('createdAt', 'desc').limit(limit);
    const topSort = fetchLocation && fetchLocation.orderBy('upvotes', 'desc').orderBy('createdAt', 'desc').limit(limit);
    const fetchBySort = sort === 'new' ? newSort : topSort;

    const updateQuery = () => {
        if (isFetching || isLoading || isLastIndex || isError || communityNotFound) {
            return null;
        }
        dispatch({type: loadMore});
    }
    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            if (!fetchLocation) {
                return null;
            }
            dispatch({type: initFetch});
            if (communityId) {
                const path = firestore.doc(`communities/${communityId}`);
                const community = await path.get().catch(e => console.error(e));
                if (!community.exists && !ignore.current) {
                    return dispatch({type: setCommunityNotFound});
                }
                dispatch({type: setCommunity, payload: community.data()});
            }
            const query = await fetchBySort.get();
            if (!ignore) {
                if (query.empty) {
                    return dispatch({type: setLastIndex});
                }
                const fetchedData = query.docs.map(docSnapshot => ({
                    id: docSnapshot.id,
                    ...docSnapshot.data(),
                    docSnapshot: docSnapshot
                }));
                dispatch({type: setData, payload: fetchedData});
            }
        }
        fetchData().catch(e => console.error(e));
        return () => { ignore = true; }
    }, [sort, communityId, baseLocation]);

    useEffect(() => {
        let ignore = false;
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const fetchNext = async () => {
                if (!fetchLocation) {
                    return null;
                }
                dispatch({type: setFetching});
                const query = await fetchBySort.startAfter(startAfterIndex).get();
                if (!ignore) {
                    if (query.empty) {
                        return dispatch({type: setLastIndex});
                    }
                    const fetchedData = query.docs.map(docSnapshot => ({
                        id: docSnapshot.id,
                        ...docSnapshot.data(),
                        docSnapshot: docSnapshot
                    }));
                    dispatch({type: updateData, payload: fetchedData});
                }
            }
            fetchNext().catch(e => console.error(e));
        }

        return () => { ignore = true; }
    }, [query]);

    return {...state, updateQuery}
}