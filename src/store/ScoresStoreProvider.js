import makeStore from "../hooks/makeStore";

const scoresStoreDefault = {
    scores: [],
    isLoading: true
}

const scoresActions = {
    updateScores: "UPDATE_SCORES",
    resetStores: "RESET_STORE"
}
const {
    updateScores,
    resetStores
} = scoresActions

const reducer = (state, action) => {
    switch (action.type) {
        case updateScores: {
            const scores = action.payload.scores
            return {
                scores,
                isLoading: false
            }
        }
        case resetStores: {
            return {
                ...scoresStoreDefault,
                isLoading: false
            };
        }
        default: {
            console.error("Invalid scores action type");
            return state
        }
    }
}

const [
    ScoresStoreProvider,
    useScoresStore,
    useScoresDispatch
] = makeStore(reducer, scoresStoreDefault);

export {ScoresStoreProvider, useScoresStore, useScoresDispatch, scoresActions}