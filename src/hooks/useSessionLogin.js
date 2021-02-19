import {useEffect} from "react";
import {useUserDispatch} from "../store/UserStoreProvider";
import {auth, firestore} from "../firebase";
import {useNavigate} from "@reach/router";

export function useSessionLogin() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const usersCollection = firestore.collection('users');
                const userData = (await usersCollection.doc(user.uid).get()).data();
                const {subscriptions} = userData || {subscriptions: []};
                const userSubscriptionsCommunityData = await Promise.all(
                    await subscriptions.map(async docRef => {
                        return (await docRef.get()).data();
                    })).catch(error => console.error(error));
                dispatch({
                    type: "SESSION_LOGIN",
                    payload: {
                        user,
                        userData,
                        subscriptionsData: userSubscriptionsCommunityData
                    }
                });
            } else {
                dispatch({type: "LOGOUT"});
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);
}