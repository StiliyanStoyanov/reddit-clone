import firebase, {firestore} from "../firebase";
import {asyncHelper} from "./async-helper";

export const subscribe = async (community, user) => {
    if (!user.uid || !community.id) return console.error('missing user or community');
    const count = 1;
    const batch = firestore.batch();
    const communityRef = firestore.doc(`communities/${community.id}`);
    const subscriptionRef = firestore.doc(`/users/${user.uid}/subscriptions/${community.id}`);
    const subscription = {id: community.id, isFavourite: false, reference: communityRef}
    const updatedCommunity = {...community, subscribers: community.subscribers + count}
    batch.update(communityRef, {subscribers: firebase.firestore.FieldValue.increment(count)});
    batch.set(subscriptionRef, subscription);

    try {
        await batch.commit();
        return [updatedCommunity, null]
    } catch (error) {
        return [community, error];
    }
}
export const unsubscribe = async(community, user) => {
    if (!user?.uid || !community?.id) return console.error('missing user or community');
    const count = -1;
    const batch = firestore.batch();
    const communityRef = firestore.doc(`communities/${community.id}`);
    const subscriptionRef = firestore.doc(`/users/${user.uid}/subscriptions/${community.id}`);
    batch.update(communityRef, {subscribers: firebase.firestore.FieldValue.increment(count)});
    batch.delete(subscriptionRef);

    try {
        await batch.commit();
        return [community, null]
    } catch (error) {
        return [community, error];
    }
}