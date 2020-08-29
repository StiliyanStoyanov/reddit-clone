/* eslint-disable no-unused-vars */
import firebase from "../firebase";
import {useCallback, useEffect, useReducer} from "react";
import {useNavigate} from "@reach/router";
import {authSubmitStatusReducer, authSubmitStatusReducerTypes} from "./shared/authSubmitStatusReducer";

const {ERROR, DISABLE_BUTTON} = authSubmitStatusReducerTypes;

export function useSignUp() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authSubmitStatusReducer, {
        isLoading: false,
        error: null,
        buttonDisabled: false
    });

    const signUp = useCallback((email, password) => {
        dispatch({type: DISABLE_BUTTON})
        const usersCollection = firebase.firestore().collection("users");

        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            const user = res.user;

            usersCollection.doc(user.uid).set({}).catch(err => {
                console.error(err);
                dispatch({type: ERROR, payload: {code: "auth/permission-denied"}});
                navigate("/");
            });
            navigate("/");
        }).catch(err => {
            console.error(err);
        })
    }, [navigate]);

    return [signUp, state]
}