import {useEffect} from "react";
import {firestore} from "../../firebase";
import {useUserStore} from "../../store/UserStoreProvider";
import {useSubscriptionsDispatch, subscriptionsActions} from "../../store/SubscriptionsStoreProvider";
const {updateSubscriptions, resetStore} = subscriptionsActions

const SubscriptionsListener = () => {
    const {user} = useUserStore();
    const subscriptionsDispatch = useSubscriptionsDispatch();
    useEffect(() => {
        if (!user) return;
        // More info about the code below - https://firebase.google.com/docs/firestore/query-data/listen
        const path = firestore.collection(`/users/${user.uid}/subscriptions`);
        const unsubscribe = path.onSnapshot(async subscriptionsSnapshot => {
            const subscriptions = subscriptionsSnapshot.docs.map(doc => doc.data());
            let docPaths = [];
            let unsubscribes = [];
            subscriptionsSnapshot.docChanges().forEach(change => {
                const changedData = change.doc.data();
                if (change.type === 'added') {
                    docPaths.push(firestore.doc(`communities/${changedData.id}`))
                }
                if (change.type === 'modified') {
                    console.log('Modified: ', changedData.id);
                }
                if (change.type === 'removed') {
                    unsubscribes.push(changedData);
                }
            });
            console.log('Added: ', docPaths.map(doc => doc.id));
            console.log('Removed: ', unsubscribes);
            const getDocs = await Promise.all(docPaths.map(doc => doc.get()));
            const subscriptionsData = getDocs.map(doc => {
                if (doc.exists) {
                    return doc.data();
                }
                console.log('subscription not found returning empty object');
                return {}
            })
            subscriptionsDispatch({
                type: updateSubscriptions,
                payload: {
                    subscriptions: subscriptions,
                    newSubscriptionsData: subscriptionsData,
                    unsubscribes: unsubscribes
                }
            });
        });

        return () => {
            subscriptionsDispatch({type: resetStore});
            unsubscribe();
        }
    }, [user, subscriptionsDispatch])

    return null;
};

export default SubscriptionsListener;
