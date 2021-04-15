import makeStore from "../hooks/makeStore";

const subscriptionsStoreDefault = {
    subscriptions: [],
    subscriptionsData: [],
    isLoading: true,
}

const subscriptionsActions = {
    updateSubscriptions: "UPDATE_SUBSCRIPTIONS",
    resetStore: "RESET_STORE"
}
const {
    updateSubscriptions,
    resetStore
} = subscriptionsActions

const reducer = (state, action) => {
    switch (action.type) {
        case updateSubscriptions: {
            const {subscriptionsData} = state
            const {subscriptions, newSubscriptionsData, unsubscribes} = action.payload;
            // console.log(action.payload);
            // console.log(subscriptions, subscriptionsData, unsubscribes);
            const updatedSubscriptionsData = subscriptionsData.concat(newSubscriptionsData).filter(sub => {
                // console.log(unsubscribes.some(unsub => unsub.id === sub.id));
                return sub;
            });
            return {
                ...state,
                subscriptions,
                subscriptionsData: updatedSubscriptionsData,
                isLoading: false
            }
        }
        case resetStore: {
            return {
                ...subscriptionsStoreDefault,
                isLoading: false
            };
        }
        default: {
            console.error("Invalid user store action type");
            return state
        }
    }
}

const [
    SubscriptionsStoreProvider,
    useSubscriptionsStore,
    useSubscriptionsDispatch
] = makeStore(reducer, subscriptionsStoreDefault);

export {SubscriptionsStoreProvider, useSubscriptionsStore, useSubscriptionsDispatch, subscriptionsActions}