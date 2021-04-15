/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from "react";
import {usePostStore} from "../../../store/PostStoreProvider";
import firebase, {firestore, storage} from "../../../firebase";
import {css} from "@emotion/react";
import {useUserStore} from "../../../store/UserStoreProvider";
import {useNavigate} from "react-router";
// https://gist.github.com/dperini/729294#file-regex-weburl-js
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i

const CreatePostButton = () => {
    const {user} = useUserStore();
    const state = usePostStore();
    const navigate = useNavigate();
    const {activeForm, title, postContent, linkContent, imageDataUrl, imageFile, community} = state
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (!user) return;
        const isBlank = str => (!str || /^\s*$/.test(str));
        if (isBlank(title) || !community) return setDisabled(true);

        switch (activeForm) {
            case 'post': {
                if (disabled) {
                    setDisabled(false);
                }
                break;
            }
            case 'image': {
                if (imageFile) {
                    setDisabled(false);
                } else {
                    setDisabled(true);
                }
                break;
            }
            case 'link': {
                if (urlRegex.test(linkContent)) {
                    setDisabled(false);
                } else {
                    setDisabled(true);
                }
                break;
            }
            default:
                break;
        }
    }, [state]);

    const handleSubmit = event => {
        setDisabled(true);
        const path = firestore.collection(`/communities/${community.id}/posts`);
        path.add({
            author: user.displayName,
            communityName: community.id,
            content: postContent,
            title: title,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            communityImageUrl: community.imageUrl,
            upvotes: 0,
            contentType: activeForm
        }).then(post => {
            console.log('successfully created post', post);
            navigate(`/e/${community.id}/comments/${post.id}`);
        }).catch(err => {
            // TODO: Add notification
            console.error(err);
            setDisabled(true);
        })
    }
    return (
        <div css={{paddingBottom: "8px"}}>
            <button disabled={disabled} css={create_post_button} onClick={handleSubmit}>Create</button>
        </div>

    );
};

const create_post_button = css`
  display: block;
  cursor: pointer;
  width: 100px;
  height: 34px;
  border: 0;
  &:disabled {
    cursor: not-allowed;
  }
  border-radius: 8px;
  margin: 0 auto 8px auto;
`

export default CreatePostButton;
