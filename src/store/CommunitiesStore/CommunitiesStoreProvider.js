import React, {createContext, useContext, useEffect, useReducer} from "react";
import {firestore} from "../../firebase";
import {useMatch} from "react-router";

const communityStoreDefault = {
    community: null,
    isLoading: true
}

const communityStoreActions = {
    setCommunity: "SET_COMMUNITY",
    setLoading: "SET_LOADING",
    clearCommunity: "CLEAR_COMMUNITY"
}
const {
    setCommunity,
    setLoading,
    clearCommunity
} = communityStoreActions

const communityStoreReducer = (state, action) => {
    switch (action.type) {
        case setCommunity: {
            return {
                community: action.payload,
                isLoading: false
            }
        }
        case setLoading: {
            return {
                ...state,
                isLoading: true
            }
        }
        case clearCommunity: {
            return {
                ...state,
                community: null,
                isLoading: false
            };
        }
        default: {
            console.error("Invalid community store action");
            return state
        }
    }
}
const storeContext = createContext({});
const dispatchContext = createContext({});
const CommunitiesStoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(communityStoreReducer, communityStoreDefault);
    const {params: {communityId, '*': remainingCommunityPath}} = useMatch('/e/:communityId/*') || {params: {communityId: null, '*': null}}


    useEffect(() => {
        if (!communityId) {
            dispatch({type: clearCommunity});
            return dispatch({type: setLoading});
        }

        firestore.doc(`communities/${communityId}`).get().then(snapshot => {
            if (snapshot.exists) {
                dispatch({type: setCommunity, payload: snapshot.data()});
            } else {
                dispatch({type: clearCommunity});
            }
        }).catch(error => {
            console.error(error);
        });
    }, [communityId, dispatch]);

    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={store}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}
function useCommunitiesStore() {
    return useContext(storeContext);
}
function useCommunitiesDispatch() {
    return useContext(dispatchContext);
}

export {CommunitiesStoreProvider, useCommunitiesStore, useCommunitiesDispatch}