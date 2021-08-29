import {firestore} from "../firebase";
import {asyncHelper} from "./async-helper";

export const updateAvatarUrl = (uid, newUrl) => {
    const userRef = firestore.doc(`/users/${uid}`);
    return asyncHelper(userRef.update({
        avatarUrl: newUrl
    }))
}