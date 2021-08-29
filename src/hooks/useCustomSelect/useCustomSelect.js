import {useCallback, useEffect, useReducer, useRef} from "react";
import {customSelectReducer, init, customSelectActions} from "./customSelectReducer";
const {remove, updateDefaults} = customSelectActions

export function useCustomSelect(optionDefaults, primarySelected) {
    const [state, dispatch] = useReducer(customSelectReducer, {optionDefaults: optionDefaults}, init);
    const optionsRefs = useRef([]);
    const {options} = state
    useEffect(() => {
        optionsRefs.current = optionsRefs.current.slice(0, options.length);
    }, [options]);

    useEffect(() => {
        dispatch({type: updateDefaults, payload: {optionDefaults, primarySelected}});
    }, [optionDefaults, primarySelected]);

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
    }, []);

    return [state, dispatch, dispatchWithOptionsRefs, optionsRefs]
}