import {useEffect, useState} from "react";
import {useDispatch} from "../store/StoreProvider";
import firebase from "../firebase";

export function useSessionLogin() {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                dispatch({
                    type: "SESSION_LOGIN",
                    payload: user
                });
                setLoading(false);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [dispatch]);
    return isLoading
}