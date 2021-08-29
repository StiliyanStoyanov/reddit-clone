/** @jsxImportSource @emotion/react */
import {count_span} from "../../../../styles/scores_styles";
import UpvoteButton from "./UpvoteButton";
import DownvoteButton from "./DownvoteButton";
import {kFormatter} from "../../../../utils/kFormatter";
import {useUserStore} from "../../../../store/UserStore/UserStoreProvider";
import {useDebouncedCallback} from "use-debounce";
import firebase, {firestore} from "../../../../firebase";
import {useScoresStore} from "../../../../store/ScoresStoreProvider";

export const Scores = ({initialScores, communityId, postId}) => {
    const {user} = useUserStore();
    const scoresStore = useScoresStore();
    const {scores, [postId]: scoreLocal} = scoresStore;
    const scoreRemote = scores.find(score => score.postId === postId);
    const score = scoreLocal || scoreRemote || {score: 0, postId, communityId};
    const debouncedScore = useDebouncedCallback((score) => {
        const batch = firestore.batch();
        const scoresUserPath = firestore.doc(`/users/${user.uid}/scores/${postId}`);
        const postPath = firestore.doc(`/communities/${communityId}/posts/${postId}`);
        scoresUserPath.get().then(snap => {
            const oldScore = snap.data();
            if (snap.exists) {
                if (score === 0) {
                    batch.delete(scoresUserPath, {communityId, postId, score});
                    batch.update(postPath, {scores: firebase.firestore.FieldValue.increment(oldScore.score * -1)});
                } else if (score === 1 && oldScore.score === -1) {
                    batch.set(scoresUserPath, {communityId, postId, score}, {merge: true});
                    batch.update(postPath, {scores: firebase.firestore.FieldValue.increment(2)});
                } else if (score === -1 && oldScore.score === 1) {
                    batch.set(scoresUserPath, {communityId, postId, score}, {merge: true});
                    batch.update(postPath, {scores: firebase.firestore.FieldValue.increment(-2)});
                }
            } else {
                if (score !== 0) {
                    batch.set(scoresUserPath, {communityId, postId, score}, {merge: true});
                    batch.update(postPath, {scores: firebase.firestore.FieldValue.increment(score)});
                }
            }
            batch.commit().then(() => {
                console.log("score count updated!", score);
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }, 1000, {leading: true});
    return (
        <>
            <UpvoteButton
                initialScores={initialScores}
                score={score}
                debouncedScore={debouncedScore}
            />
            <span css={count_span}>{kFormatter(score.scoreCount ?? initialScores)}</span>
            <DownvoteButton
                initialScores={initialScores}
                score={score}
                debouncedScore={debouncedScore}
            />
        </>

    );
};
