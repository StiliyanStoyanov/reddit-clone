import {useEffect} from "react";
import {useUserDispatch} from "../store/UserStoreProvider";
import firebase from "../firebase";

export function useSessionLogin() {
    const dispatch = useUserDispatch();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const usersCollection = firebase.firestore().collection('users');
                const userData = (await usersCollection.doc(user.uid).get()).data();
                const {subscriptions} = userData || { subscriptions : [] };
                const userSubscriptionsCommunityData = await Promise.all(
                    await subscriptions.map(async docRef => {
                    return (await docRef.get()).data();
                })).catch(error => console.error(error));
                dispatch({
                    type: "SESSION_LOGIN",
                    payload: {
                        user,
                        userData,
                        userSubscriptionsCommunityData
                    }
                });
            } else {
                dispatch({type: "SET_LOADING", payload: false});
            }
        });
        return () => unsubscribe();
    }, [dispatch]);
}