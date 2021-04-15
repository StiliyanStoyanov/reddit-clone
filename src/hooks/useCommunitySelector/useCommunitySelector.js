import {useCallback, useEffect, useMemo, useReducer, useRef} from "react";
import {firestore} from "../../firebase";
import {communitySelectorReducer, init, communitySelectorActions} from "./communitySelectorReducer";
import {findFirstLetter} from "./utils";
import useHighlight from "../useHighlight";
import {useSubscriptionsStore} from "../../store/SubscriptionsStoreProvider";

const {updateCommunities, setFetching} = communitySelectorActions

const findCommunityByLetter = async (letter) => {
    return (await firestore
        .collection("communities")
        .where("queryParam", "==", letter)
        .get())
        .docs
        .map(doc => doc.data());
}

const useCommunitySelector = () => {
    const {subscriptionsData, isLoading} = useSubscriptionsStore();
    const [state, dispatch] = useReducer(communitySelectorReducer, {}, init);
    const {userInput, isFetching, communities, skipQueryParams} = state
    const refs = useRef([]);
    refs.current = [];
    const {highlight, ...highlightMethods} = useHighlight(refs);
    const addToRefs = useCallback((el, content) => {
        if (el) {
            refs.current.push({
                ref: el,
                content,
                index: refs.current.length
            });
        }
    }, []);
    const subscriptions = useMemo(() => {
        if (!userInput) return subscriptionsData
        return subscriptionsData.filter(subscription => {
            return subscription.id.includes(userInput);
        })
    }, [userInput, subscriptionsData]);
    const others = useMemo(() => {
        if (!userInput) return [];

        return communities.filter(community => {
            const isUserSubscription = subscriptionsData.some(subscription => subscription.id === community.id);
            if (isUserSubscription) return false;
            return community.id.includes(userInput);
        })
    }, [userInput, communities, subscriptionsData]);

    useEffect(() => {
        const char = findFirstLetter(userInput);
        if (!char) return;
        const alreadyFetched = skipQueryParams.some(letter => letter === char);
        if (alreadyFetched || isFetching) return;
        dispatch({type: setFetching, payload: {isFetching: true}});
        findCommunityByLetter(char).then(data => {
            dispatch({type: updateCommunities, payload: {data, char}});
        }).catch(err => {
            console.error(err);
            dispatch({type: setFetching, payload: {isFetching: false}});
        });
    }, [userInput, skipQueryParams, isFetching]);

    return {state:{...state, isLoading, highlight: highlight.current, subscriptions, others}, methods: {dispatch, highlightMethods, addToRefs}}
};

export default useCommunitySelector;
