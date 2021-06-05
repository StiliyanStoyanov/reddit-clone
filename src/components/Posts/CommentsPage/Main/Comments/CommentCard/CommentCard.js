/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CommentAvatar from "./Items/CommentAvatar";
import CommentAuthor from "./Items/CommentAuthor";
import CommentContent from "./Items/CommentContent";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import {memo, useState} from "react";
import CommentEditMode from "./Items/CommentEditMode";
import ButtonOne from "../../../../../shared/Buttons/ButtonOne";
import Dialog from "../../../../../shared/Dialog/Dialog";
import DialogHeader from "../../../../../shared/Dialog/DialogHeader";
import DialogMessage from "../../../../../shared/Dialog/DialogMessage";
import DialogGroup from "../../../../../shared/Dialog/DialogGroup";
import DialogButton from "../../../../../shared/Dialog/DialogButton";
import firebase, {firestore} from "../../../../../../firebase";
import {toast} from "react-toastify";
import ReactFocusLock from "react-focus-lock";

const CommentCard = memo(({comment, addComment, removeComment}) => {
    const {
        avatarUrl, createdAt, commentBody,
        author, authorUid,
        id, postId, communityId
    } = comment
    const {user} = useUserStore();
    const isAuthor = user?.uid === authorUid;
    const [deleteMode, setDeleteMode] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleEditOpen = event => setEditMode(true);
    const handleEditCancel = event => setEditMode(false);
    const handleEditConfirm = event => {
        // TODO: Edit confirm
    };

    const handleDeleteOpen = () => setDeleteMode(true);
    const handleDeleteCancel = () => setDeleteMode(false);
    const handleDeleteConfirm = () => {
        const batch = firestore.batch();
        const commentPath = firestore.doc(`communities/${communityId}/posts/${postId}/comments/${id}`)
        const postPath = firestore.doc(`communities/${communityId}/posts/${postId}`);
        batch.delete(commentPath);
        batch.update(postPath, {commentsCount: firebase.firestore.FieldValue.increment(-1)});
        removeComment(comment);
        batch.commit().then(res => {
            toast.info('Comment deleted')
        }).catch(err => {
            addComment(comment)
            toast.error('Failed to delete comment')
            console.error(err);
        })
    };

    return (
        <div css={[container]}>
            <CommentAvatar avatarUrl={avatarUrl} author={author}/>
            <div css={[content_container]}>
                <CommentAuthor author={author} createdAt={createdAt}/>
                {!editMode && <CommentContent id={id} commentBody={commentBody}/>}
                {editMode && <CommentEditMode commentBody={commentBody} handleEditCancel={handleEditCancel} handleEditConfirm={handleEditConfirm}/>}
                {isAuthor && !editMode &&
                <>
                    <ButtonOne shouldRipple={false} onClick={handleEditOpen}>
                        <span>Edit</span>
                    </ButtonOne>
                    <ButtonOne onClick={handleDeleteOpen}>
                        <span>Delete</span>
                    </ButtonOne>
                </>}
                {deleteMode &&
                <Dialog id={'delete-comment-modal'} active={deleteMode}>
                    <DialogHeader>Delete comment</DialogHeader>
                    <DialogMessage>Are you sure you want to delete your comment?</DialogMessage>
                    <ReactFocusLock returnFocus={true}>
                        <DialogGroup>
                            <DialogButton shouldRipple={false} onClick={handleDeleteCancel}>Cancel</DialogButton>
                            <DialogButton onClick={handleDeleteConfirm}>Delete</DialogButton>
                        </DialogGroup>
                    </ReactFocusLock>
                </Dialog>
             }
            </div>
        </div>
    );
});
const container = theme => css`
  position: relative;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${theme.color1};
  background-color: ${theme.background1};
  flex-grow: 1;
  padding: 8px 4px;
  label: comment-card
`
const content_container = css`flex-grow: 1;
  label: comment-content-container`

export default CommentCard;
