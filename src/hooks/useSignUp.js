/* eslint-disable no-unused-vars */
import {auth, functions} from "../firebase";
import {useReducer} from "react";
import {useNavigate} from "@reach/router";
import {authSubmitStatusReducer, authSubmitStatusReducerTypes} from "../reducers/shared/authSubmitStatusReducer";
const {ERROR, DISABLE_BUTTON} = authSubmitStatusReducerTypes;

export function useSignUp() {
    const navigate = useNavigate();
    const createUser = functions.httpsCallable("createUser");
    const [state, dispatch] = useReducer(authSubmitStatusReducer, {
        isLoading: false,
        error: null,
        buttonDisabled: false
    });

    const signUp = (data) => {
        const {username, email, password} = data;
        dispatch({type: DISABLE_BUTTON});
        createUser({username, email, password}).then(res => {
            const actionCodeSettings = {
                url: "http://localhost:3000"
            }
            auth.signInWithEmailAndPassword(email, password).then(() => {
                auth.currentUser.sendEmailVerification(actionCodeSettings).catch(e => console.error(e))
            }).catch(err => console.error(err));

            navigate('/');
        }).catch(err => {
            console.error(err);
            dispatch({type: ERROR, payload: err.details});
        });
    };
    return [signUp, state]
}