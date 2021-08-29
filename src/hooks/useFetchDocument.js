import {useEffect, useReducer} from "react";

const actions = {
    setDocument: "SET_DOCUMENT",
    setError: "ERROR",
    reset: 'RESET',
}
const {setDocument, setError, reset} = actions
const initialState = {
    data: {},
    error: {},
    isLoading: true,
    isError: false
}
const init = (initialState) => initialState;
const reducer = (state, action) => {
    switch (action.type) {
        case setDocument: {
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        }
        case setError: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                error: action.payload
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

export function useFetchDocument(path, stateAsProp = null) {
    const [state, dispatch] = useReducer(reducer, initialState, init);

    useEffect(() => {
        let ignore = false;
        if (stateAsProp) return dispatch({type: setDocument, payload: stateAsProp})

        const fetchDocument = async () => {
            if (!path) return null;

            const doc = await path.get().catch(err => {
                console.error(err);
                return dispatch({type: setError, payload: err});
            });
            if (!ignore) {
                if (!doc.exists) {
                    return dispatch({
                        type: setError,
                        payload: {
                            error: {
                                message: 'Document does not exist'
                            }
                        }
                    });
                }
                dispatch({type: setDocument, payload: doc.data()});
            }
        };
        fetchDocument().catch(err => console.error(err));
        return () => { ignore = true }
    }, [path, stateAsProp]);

    return state
}