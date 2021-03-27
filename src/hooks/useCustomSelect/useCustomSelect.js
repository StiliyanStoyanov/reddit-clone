import {useCallback, useEffect, useReducer, useRef} from "react";
import {customSelectReducer, init} from "./customSelectReducer";

export function useCustomSelect(optionsDefault) {
    const [state, dispatch] = useReducer(customSelectReducer, {optionsDefault: optionsDefault}, init);
    const optionsRefs = useRef([]);
    const {options} = state

    useEffect(() => {
        optionsRefs.current = optionsRefs.current.slice(0, options.length);
    }, [options]);

    const dispatchWithOptionsRefs = useCallback((dispatchContext) => {
        const type = dispatchContext.type;
        const payload = dispatchContext.payload || {};
        dispatch({
            type: type,
            payload: {
                ...payload,
                optionsRefs: optionsRefs.current
            }
        })
    }, [options]);

    return [state, dispatch, dispatchWithOptionsRefs, optionsRefs]
}