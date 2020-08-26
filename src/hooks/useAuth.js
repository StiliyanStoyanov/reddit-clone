import firebase from "../firebase";
import {useState, useCallback} from "react";
import {useDispatch} from "../store/StoreProvider";
import {useNavigate} from "@reach/router";
import {ActionType} from "../store/StoreProvider";

export const useAuthTypes = {
    signUpUser: 'createUserWithEmailAndPassword',
    loginUser: 'signInWithEmailAndPassword'
}

export function useAuth(actionType) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({isLoading: true, data: undefined, error: null, buttonDisabled: false});
    const mutate = useCallback((email, password) => {
        setState({...state, buttonState: true});
        firebase.auth()[actionType](email, password).then(user => {
            setState({
                ...state,
                isLoading: false,
                data: user,
                buttonState: false
            });
            dispatch({type: ActionType.SIGN_UP, payload: user});
            navigate('/');
        }).catch(err => {
            setState({
                ...state,
                isLoading: false,
                error: err,
                buttonState: false
            });
        });
    }, [state, dispatch, navigate, actionType]);
    const {isLoading, data, error, buttonState} = state
    return [mutate, {isLoading, data, error, buttonState}]
}