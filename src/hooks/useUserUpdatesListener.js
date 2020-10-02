import {useEffect} from "react";
import {useDispatch, useStore} from "../store/StoreProvider";
import firebase from "../firebase";

export function useUserUpdatesListener() {
    const {user} = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) { return; }
        const unsubscribe = firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .onSnapshot(async (snapshot) => {
                if (!snapshot.exists) {
                    return null;
                }
                const userExtraData = (await firebase.firestore().collection('users').doc(user.uid).get()).data();
                userExtraData.communitiesFollowed.map(async docSnapshot => {
                    const community = (await docSnapshot.get()).data();
                    dispatch({type: "UPDATE_USER", payload: community})
                });

            });
        return () => unsubscribe();
    }, [user, dispatch]);
}

