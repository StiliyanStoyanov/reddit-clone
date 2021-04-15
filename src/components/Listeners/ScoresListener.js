import {useEffect} from "react";
import {useUserStore} from "../../store/UserStoreProvider";
import {firestore} from "../../firebase";
import {useScoresDispatch, scoresActions} from "../../store/ScoresStoreProvider";
const {updateScores, resetScores} = scoresActions

const ScoresListener = () => {
    const {user} = useUserStore();
    const scoresDispatch = useScoresDispatch();
    useEffect(() => {
        if (!user) return;
        // More info about the code below - https://firebase.google.com/docs/firestore/query-data/listen
        const path = firestore.collection(`/users/${user.uid}/scores`);
        const unsubscribe = path.onSnapshot(async scoresSnapshot => {
            const scores = scoresSnapshot.docs.map(doc => doc.data());
            scoresDispatch({
                type: updateScores,
                payload: {scores}
            });
        });

        return () => {
            console.log('unmounting scores');
            scoresDispatch({type: resetScores})
            unsubscribe();
        }
    }, [user, scoresDispatch])

    return null;
};

export default ScoresListener;
