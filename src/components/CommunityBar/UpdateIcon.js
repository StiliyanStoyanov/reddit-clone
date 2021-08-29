/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {validateImage} from "../../utils/validateImage";
import {firestore, storage} from "../../firebase";
import {toast} from "react-toastify";
import {useState} from "react";
import {usePostsDispatch, postsActions} from "../../store/PostsStoreProvider";
import {useSubscriptionsDispatch, subscriptionsActions} from "../../store/SubscriptionsStoreProvider";
import {useCommunityDispatch, communityStoreActions} from "../../store/CommunityStore/CommunityStoreProvider";
import {useUserStore} from "../../store/UserStore/UserStoreProvider";
const {updateField} = postsActions
const {updateSubscription} = subscriptionsActions
const {setCommunity} = communityStoreActions

const UpdateIcon = ({community, isSubscribed}) => {
    const {user} = useUserStore();
    const subscriptionsDispatch = useSubscriptionsDispatch();
    const communityDispatch = useCommunityDispatch();
    const postsDispatch = usePostsDispatch();
    const handleFileChange = async event => {
        const file = event.target.files[0];
        if (!file) return;
        try {
            storage.ref(`communities/${community.id}/icon`).put(file, {
                cacheControl: 'public',
                contentType: file.contentType,
                customMetadata: {uid: user.uid}
            }).then(snapshot => {
                console.log(snapshot);
            }).catch(err => console.error(err));
            // const url = await ref.getDownloadURL();
            // await firestore.doc(`communities/${community.id}`).update({imageUrl: url});
            // const updatedCommunity = {
            //     ...community,
            //     imageUrl: url
            // }
            // communityDispatch({type:setCommunity, payload: updatedCommunity});
            // postsDispatch({type: updateField, payload: {field:'communityImageUrl', newValue: url}})
            // if (isSubscribed) {
            //     subscriptionsDispatch({type: updateSubscription, payload: updatedCommunity});
            // }

        } catch(e) {
            console.error(e);
            // communityDispatch({type:setCommunity, payload: community})
            // subscriptionsDispatch({type: updateSubscription, payload: community});
            // toast.error('Failed to update image');
            // console.error(e);
        }
    }


    return (
        <label css={label}>
            <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg"/>
            Update icon
        </label>
    );
};

const label = css`
  border: 1px solid #ccc;
  position: absolute;
  left: 10px;
  bottom: 0;
  font-size: 10px;
  padding: 4px;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  input {
    display: none;
  }
`

export default UpdateIcon;
