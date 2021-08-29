import {createContext, useContext, useEffect, useReducer} from "react";
import {useUserStore} from "./UserStore/UserStoreProvider";
import {firestore} from "../firebase";

const scoresStoreDefault = {
    scores: []
}

const scoresActions = {
    setScores: "SET_SCORES",
    updateScore: "UPDATE_SCORE_COUNT",
    resetScores: "RESET_SCORES"
}
const {
    setScores,
    updateScore,
    resetScores
} = scoresActions

const scoresReducer = (state, action) => {
    switch (action.type) {
        case setScores: {
            const newScores = action.payload
            return {
                ...state,
                scores: newScores
            };
        }
        case updateScore: {
            const {score, amount, initialScores} = action.payload;
            if (!score || !score.postId || typeof score.score !== "number") {
                console.error('invalid score', score)
                return state
            }
            const localScore = state[score.postId];
            const localScoreCount = localScore?.scoreCount ?? initialScores;
            return {
                ...state,
                [score.postId]: {
                    score: score.score + amount,
                    scoreCount: localScoreCount + amount,
                    postId: score.postId
                }
            };
        }
        case resetScores: {
            return {
                ...scoresStoreDefault
            };
        }
        default: {
            console.error("Invalid scores action type");
            return state
        }
    }
}
const storeContext = createContext({});
const dispatchContext = createContext({});
const ScoresStoreProvider = ({ children }) => {
    const {user} = useUserStore();
    const [store, dispatch] = useReducer(scoresReducer, scoresStoreDefault);
    useEffect(() => {
        if (!user) return;
        // More info about the code below - https://firebase.google.com/docs/firestore/query-data/listen
        const path = firestore.collection(`/users/${user.uid}/scores`);
        const unsubscribe = path.onSnapshot(async scoresSnapshot => {
            const scores = scoresSnapshot.docs.map(doc => doc.data());
            dispatch({type: setScores, payload: scores})
        });
        return () => {
            dispatch({type: resetScores})
            unsubscribe();
        }
    }, [user, dispatch])

    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={store}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}
function useScoresStore() {
    return useContext(storeContext);
}
function useScoresDispatch() {
    return useContext(dispatchContext);
}

export {ScoresStoreProvider, useScoresStore, useScoresDispatch, scoresActions}