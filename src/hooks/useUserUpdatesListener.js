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
                dispatch({type: "LOADING_USER_DATA", payload: true});
                if (!snapshot.exists) {
                    dispatch({type: "LOADING_USER_DATA", payload: false});
                    return null;
                }
                const userExtraData = (await firebase.firestore().collection('users').doc(user.uid).get()).data();
                if (!userExtraData.communitiesFollowed) { return false; }
                const dataList = await userExtraData.communitiesFollowed.map(async docSnapshot => {
                    return (await docSnapshot.get()).data();
                });
                Promise.all(dataList).then(result => {
                    dispatch({type: "UPDATE_USER", payload: result});
                    dispatch({type: "LOADING_USER_DATA", payload: false});
                }).catch(err => console.error(err));

            });
        return () => unsubscribe();
    }, [user, dispatch]);
}

