import {useEffect, useReducer} from "react";
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
    const {subscriptions, isLoading} = useSubscriptionsStore();
    const [state, dispatch] = useReducer(communitySelectorReducer, {}, init);
    const {userInput, isFetching, communities, skipQueryParams} = state
    const {highlight, addToRefs, ...highlightMethods} = useHighlight();

    const subs = userInput ? subscriptions.filter(subscription => {
        return subscription.id?.includes(userInput);
    }) : subscriptions

    const others = userInput ? communities.filter(community => {
        const isUserSubscription = subscriptions.some(subscription => subscription.id === community.id);
        if (isUserSubscription) return false;
        return community.id?.includes(userInput);
    }) : []


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

    return {
        state: {...state, isLoading, highlight: highlight.current, subscriptions: subs, others},
        methods: {dispatch, highlightMethods, addToRefs}
    }
};

export default useCommunitySelector;
