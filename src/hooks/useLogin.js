/* eslint-disable no-unused-vars */
import firebase from "../firebase";
import React, {useCallback, useReducer} from "react";
import {useNavigate} from "@reach/router";
import {authSubmitStatusReducer, authSubmitStatusReducerTypes} from "./shared/authSubmitStatusReducer";

const {ERROR, DISABLE_BUTTON} = authSubmitStatusReducerTypes;

export function useLogin() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authSubmitStatusReducer, {
        isLoading: false,
        error: null,
        buttonDisabled: false
    });

    const login = useCallback((email, password) => {
        dispatch({type: DISABLE_BUTTON});
        const db = firebase.firestore();
        const usersCollection = db.collection("users");
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            const user = res.user;
            usersCollection.doc(user.uid).get().catch(err => {
                console.error(err);
                dispatch({type: ERROR, payload: {code: "auth/permission-denied"}});
                navigate("/");
            });
            navigate("/");
        }).catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }, [navigate]);
    
    return [login, state]
}