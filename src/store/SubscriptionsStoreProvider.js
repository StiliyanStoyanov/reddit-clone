import {createContext, useContext, useEffect, useReducer} from "react";
import {firestore} from "../firebase";
import {useUserStore} from "./UserStore/UserStoreProvider";

const subscriptionsStoreDefault = {
    subscriptions: [],
    administrated: [],
    isLoading: true,
}

const subscriptionsActions = {
    setSubscriptions: "SET_SUBSCRIPTIONS",
    addSubscription: "ADD_SUBSCRIPTION",
    removeSubscription: "REMOVE_SUBSCRIPTION",
    updateSubscription: "UPDATE_SUBSCRIPTION",
    setAdministrated: "SET_ADMINISTRATED",
    addAdministrated: "ADD_ADMINISTRATED",
    resetStore: "RESET_STORE"
}
const {
    setSubscriptions,
    addSubscription,
    removeSubscription,
    updateSubscription,
    setAdministrated,
    addAdministrated,
    resetStore
} = subscriptionsActions

const subscriptionsReducer = (state, action) => {
    switch (action.type) {
        case setSubscriptions: {
            return {
                ...state,
                subscriptions: action.payload,
                isLoading: false
            };
        }
        case addSubscription: {
            return {
                ...state,
                subscriptions: [
                    ...state.subscriptions,
                    {...action.payload, isFavourite: false}
                ]
            }
        }
        case removeSubscription: {
            return {
                ...state,
                subscriptions: state.subscriptions.filter(subscription => {
                    return subscription.id !== action.payload.id
                })
            }
        }
        case updateSubscription: {
            console.log(action.payload);
            return {
                subscriptions: state.subscriptions.map(subscription => {
                    if (subscription.id === action.payload.id) {
                        return {
                            ...subscription,
                            ...action.payload
                        }
                    }
                    return subscription
                }),
                administrated: state.administrated.map(administrated => {
                    if (administrated.id === action.payload.id) {
                        return {
                            ...administrated,
                            ...action.payload
                        }
                    }
                    return administrated
                }),
                isLoading: false
            }
        }
        case setAdministrated: {
            return {
                ...state,
                administrated: action.payload
            }
        }
        case addAdministrated: {
            return {
                ...state,
                administrated: [...state.administrated, action.payload]
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
const storeContext = createContext({});
const dispatchContext = createContext({});
const SubscriptionsStoreProvider = ({ children }) => {
    const {user, isLoading} = useUserStore();
    const [store, dispatch] = useReducer(subscriptionsReducer, subscriptionsStoreDefault);

    useEffect(() => {
        if (isLoading) return;
        if (!user) return dispatch({type: resetStore});
        async function getUserSubscriptions() {
            const subscriptionsPath = firestore.collection(`/users/${user.uid}/subscriptions`);
            try {
                const subscriptionsRefs = (await subscriptionsPath.get()).docs;
                const subscriptions = (await Promise.allSettled(subscriptionsRefs.map(async subRef => {
                    const subRefData = subRef.data();
                    const communityPath = firestore.doc(`communities/${subRef.id}`);
                    return firestore.runTransaction((async transaction => {
                        const community = await transaction.get(communityPath);
                        if (!community.exists) {
                            const error = {code: 404, message: `Document with path - communities/${subRef.id} - does not exist!`}
                            throw error
                        }
                        return {
                            ...community.data(),
                            isFavourite: subRefData?.isFavourite
                        };
                    }))
                }))).filter(sub => sub.status === "fulfilled").map(sub => sub.value);
                dispatch({type: setSubscriptions, payload: subscriptions});
            } catch (err) {
                return err;
            }
        }
        async function getAdminIn() {
            try {
                const adminQuery = firestore.collection('communities').where('admin', '==', user.uid);
                const communities = (await adminQuery.get()).docs.map(community => community.data());
                dispatch({type: setAdministrated, payload: communities})
            }
            catch (e) {
                return e
            }
        }

        getAdminIn().catch(err => console.error(err));
        getUserSubscriptions().catch(err => console.log(err));
    }, [user, isLoading, dispatch]);

    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={store}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}
function useSubscriptionsStore() {
    return useContext(storeContext);
}
function  useSubscriptionsDispatch() {
    return useContext(dispatchContext);
}

export {SubscriptionsStoreProvider, useSubscriptionsStore, useSubscriptionsDispatch, subscriptionsActions}