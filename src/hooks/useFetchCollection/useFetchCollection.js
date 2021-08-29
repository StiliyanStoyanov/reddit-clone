import {useEffect, useReducer, useRef} from "react";
import {fetchCollectionActions, init, fetchCollectionReducer, sorts} from "./fetchCollectionReducer";
import {useDebouncedCallback} from "use-debounce";

const {
    setData,
    updateData,
    setLoading,
    setFetching,
    setError
} = fetchCollectionActions

function useFetchCollection(pathInit = null, limitInit = null, options = {}) {
    const [state, dispatch] = useReducer(fetchCollectionReducer, {
        path: pathInit,
        limit: limitInit,
        options: options
    }, init);
    const {path, limit, order, orderBy, where: {key, operator, value}, query} = state;
    const ignoreRef = useRef(false);
    const initialLoad = useRef(true);
    const pathRef = useRef(path);
    const limitRef = useRef(limit);
    const startAfterRef = useRef(null);
    const debounced = useDebouncedCallback(() => {
        pathRef.current.get().then(snapshot => {
            initialLoad.current = false;
            const query = snapshot.docs.map(doc => ({...doc.data(), id: doc.id, docSnapshot: doc}));
            const isLast = query.length === 0 || query.length % limit !== 0
            isLast ? startAfterRef.current = null : startAfterRef.current = query[query.length - 1].docSnapshot
            if (!ignoreRef.current) dispatch({type: setData, payload: {data: query, isLastIndex: isLast}});
        }).catch(error => {
            if (ignoreRef.current) return;
            console.error(error);
            dispatch({type: setError, payload: error});
        })
    }, 1000, {leading: true})

    useEffect(() => {
        if (!path) return;
        pathRef.current = path;
        limitRef.current = limit;
        initialLoad.current = true;
        if (orderBy && order) pathRef.current = pathRef.current.orderBy(orderBy, order);
        if (key && operator && value) pathRef.current = pathRef.current.where(key, operator, value);
        if (limit) pathRef.current = pathRef.current.limit(limit);
        ignoreRef.current = false
        dispatch({type: setLoading});
        debounced();
        return () => {
            ignoreRef.current = true
        }
    }, [path, limit, order, orderBy, key, operator, value, debounced]);

    useEffect(() => {
        if (initialLoad.current || !startAfterRef.current || !pathRef.current) return;
        let ignore = false;

        dispatch({type: setFetching});
        pathRef.current.startAfter(startAfterRef.current).get().then(snapshot => {
            const query = snapshot.docs.map(doc => ({...doc.data(), id: doc.id, docSnapshot: doc}));
            const isLast = query.length === 0 || query.length % limitRef.current !== 0
            isLast ? startAfterRef.current = null : startAfterRef.current = query[query.length - 1].docSnapshot;
            if (!ignore) dispatch({type: updateData, payload: {data: query, isLastIndex: isLast}});
        }).catch(error => {
            console.error(error);
            if (!ignore) dispatch({type: setError, payload: error})
        })
        return () => {
            ignore = true;
        }
    }, [query]);

    return [state, dispatch]
}

export {useFetchCollection, fetchCollectionActions, sorts}