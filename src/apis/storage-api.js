import {storage} from "../firebase";
import {asyncHelper} from "./async-helper";

export const uploadAvatar = async (uid, file) => {
    const ref = storage.ref(`users/${uid}/avatar`);
    return asyncHelper(ref.put(file));
}
export const getAvatarDownloadURL  = async (uid) => {
    const ref = storage.ref(`users/${uid}/avatar`);
    return await asyncHelper(ref.getDownloadURL());
}