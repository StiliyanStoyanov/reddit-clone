import {useEffect, useReducer} from "react";
import {firestore} from "../firebase";

const actions = {
    update: "update",
    error: "error",
    reset: 'reset',
    clearLoading: 'clearLoading'
}
const {update, error, reset} = actions
const initialState = {
    data: {},
    error: null,
    isLoading: true,
    isError: false
}
const init = (initialState) => initialState;
const reducer = (state, action) => {
    const {payload} = action
    switch (action.type) {
        case update: {
            return {
                ...state,
                data: payload,
                isLoading: false
            }
        }
        case error: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                error: payload
            }
        }
        case reset: {
            return init(initialState)
        }
        default: {
            console.error("Incorrect useFetchDocument reducer action!")
            return state
        }
    }
}

export function useFetchDocument(path, skipFetch = false) {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const location = path ? firestore.doc(path) : null;
    useEffect(() => {
        let ignore = false;
        const fetchDocument = async () => {
            if (skipFetch || !location) return null;

            const doc = await location.get().catch(err => {
                const errorMessage = 'something went wrong';
                console.error(err);
                return dispatch({type: error, payload: errorMessage});
            });
            if (!ignore) {
                if (!doc.exists) {
                    const errorMessage = 'document not found'
                    return dispatch({type: error, payload: errorMessage});
                }
                const data = doc.data();
                dispatch({type: update, payload: data});
            }
        }
        fetchDocument().catch(err => console.error(err));
        return () => { ignore = true }
    }, []);

    return state
}