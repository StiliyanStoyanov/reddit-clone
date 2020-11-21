/* eslint-disable no-unused-vars */
import {auth} from "../firebase";
import React, {useReducer} from "react";
import {useNavigate} from "@reach/router";
import {authSubmitStatusReducer, authSubmitStatusReducerTypes} from "../reducers/shared/authSubmitStatusReducer";

const {ERROR, DISABLE_BUTTON} = authSubmitStatusReducerTypes;

export function useLogin() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authSubmitStatusReducer, {
        isLoading: false,
        error: null,
        buttonDisabled: false
    });

    const login = (email, password) => {
        dispatch({type: DISABLE_BUTTON});
        auth.signInWithEmailAndPassword(email, password).then(res => {
            navigate("/");
        }).catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    };
    
    return [login, state, dispatch]
}