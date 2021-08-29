/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {usePostStore} from "../../../store/CreatePostStoreProvider";
import firebase, {firestore, storage} from "../../../firebase";
import {css} from "@emotion/react";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
import {useNavigate} from "react-router";
import {urlRegex} from "../../../utils/urlValidators";
import {isBlank} from "../../../utils/stringCheckers";
import {Spinner} from "../../Loaders/Spinner";
import {useAuthModalDispatch} from "../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../store/AuthModal/authModalActions";
import FormButton from "../../shared/Buttons/FormButton";

const CreatePostSubmit = () => {
    const {user} = useUserStore();

    const authModalDispatch = useAuthModalDispatch();
    const state = usePostStore();
    const navigate = useNavigate();
    const {activeForm, title, postContent, linkContent, imageFile, community} = state
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isBlank(title) || !community) return setDisabled(true);
        if (activeForm === "post" && !isBlank(postContent)) {
            setDisabled(false);
        } else if (activeForm === "image" && imageFile) {
            setDisabled(false);
        } else if (activeForm === "link" && urlRegex(linkContent)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [activeForm, community, imageFile, linkContent, postContent, title]);

    const handleSubmit = async event => {
        if (!user) return authModalDispatch(openModal())
        setDisabled(true);
        setLoading(true);
        const postDoc = firestore.collection(`/communities/${community.id}/posts`).doc();
        const post = {
            id: postDoc.id,
            author: user.displayName,
            authorUid: user.uid,
            communityId: community.id,
            communityName: community.id,
            communityImageUrl: community.imageUrl,
            title: title,
            contentType: activeForm,
            scores: 0,
            commentsCount: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }
        const successMessage = 'Post successfully created';
        switch (activeForm) {
            case 'post': {
                try {
                    await postDoc.set({...post, content: postContent});
                    toast.success(successMessage);
                    navigate(`/e/${community.id}/comments/${post.id}`);
                } catch (err) {
                    console.error(err);
                    toast.error('Server error sorry please try again later!');
                    setLoading(false);
                    setDisabled(false);
                }
                break;
            }
            case 'image': {
                const ref = storage.ref(`/communities/${community.id}/posts/${post.id}`);
                try {
                    // https://stackoverflow.com/questions/7071763/max-value-for-cache-control-header-in-http
                    // https://stackoverflow.com/questions/44124537/set-cache-to-files-in-firebase-storage
                    // https://firebase.google.com/docs/storage/web/file-metadata
                    const newMetadata = {
                        cacheControl: 'public,max-age=1209600',
                    }
                    await ref.put(imageFile, newMetadata)
                    const url = await ref.getDownloadURL();
                    await postDoc.set({...post, content: url})

                    toast.success(successMessage);
                    navigate(`/e/${community.id}/comments/${post.id}`)
                } catch (err) {
                    console.error(err);
                    toast.error('Unable to create post please try again later');
                    setLoading(false);
                    setDisabled(false);
                }
                break;
            }
            case 'link': {
                try {
                    await postDoc.set({...post, content: linkContent});
                    toast.success(successMessage);
                    navigate(`/e/${community.id}/comments/${post.id}`);
                } catch (e) {
                    toast.error('Server error sorry please try again later!');
                    setLoading(false);
                    setDisabled(false);
                }
                break;
            }
            default:
                toast.error('Invalid form type');
                setLoading(false);
                setDisabled(false);
                break;
        }
    }
    return (
        <div css={{paddingBottom: "8px", position: "relative"}}>
            <Spinner css={spinner}/>
            <FormButton css={create_post_button} disabled={disabled} onClick={handleSubmit}>
                Create
            </FormButton>
        </div>

    );
};
const spinner = css`position: absolute; top: -50px; left: 50%; transform: translate(-50%, 0);`
const create_post_button = css`
  display: block;
  cursor: pointer;
  width: 100px;
  height: 34px;
  border: 0;
  border-radius: 8px;
  margin: 0 auto 8px auto;
`

export default CreatePostSubmit;
