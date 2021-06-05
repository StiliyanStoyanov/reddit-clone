/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import firebase, {firestore} from "../../../../../firebase";
import {useParams} from "react-router";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import {useState} from "react";
import {isEmpty} from "../../../../../utils/stringCheckers";
import TextareaAutosize from "react-textarea-autosize";
import {useRipple} from "../../../../../hooks/useRipple";

const CommentForm = ({addComment, removeComment}) => {
    const {ripples, createRipple} = useRipple();
    const {user, username, avatarUrl} = useUserStore();
    const {communityId, postId} = useParams();
    const [userInput, setUserInput] = useState("");
    const handleChange = event => {
        setUserInput(event.target.value);
    }

    const handleMouseDown = event => {
        createRipple(event);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const batch = firestore.batch();
        const commentDoc = firestore.collection(`/communities/${communityId}/posts/${postId}/comments`).doc();
        const postDoc = firestore.doc(`/communities/${communityId}/posts/${postId}`);
        const comment = {
            authorUid: user.uid,
            author: username,
            avatarUrl: avatarUrl,
            commentBody: userInput,
            communityId: communityId,
            createdAt: firebase.firestore.Timestamp.now(),
            id: commentDoc.id,
            postId: postId,
            docSnapshot: commentDoc
        }
        batch.update(postDoc, {commentsCount: firebase.firestore.FieldValue.increment(1)});
        batch.set(commentDoc, comment);

        addComment(comment);
        setUserInput("");
        batch.commit().catch(err => {
            removeComment(comment);
            setUserInput(userInput);
            console.error(err);
        });
    }
    return (
        <form css={form} onSubmit={handleSubmit}>
            <div>
                <TextareaAutosize
                    onChange={handleChange}
                    value={userInput}
                    css={textarea}
                    placeholder="What do you think ?"
                    name="comment"
                />
            </div>

            <button type="submit" onMouseDown={handleMouseDown} disabled={isEmpty(userInput)} css={button}>
                Comment
                {ripples}
            </button>
        </form>
    );
};
const form = css`
  label: comment-form
`
const textarea = theme => css`
  resize: vertical;
  outline: none;
  width: 100%;
  min-height: 80px;
  color: ${theme.color1};
  border-color: ${theme.border1};
  border-radius: 4px;
  background-color: ${theme.background1};
  padding: 8px 16px;
  overflow-x: hidden;
  overflow-wrap: break-word;

  &:focus {
    border-color: ${theme.colorHighlight1};
  }

  label: comment-form-textarea
`
const button = theme => css`
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 30px;
  box-shadow: 1px 1px 1px 0 #343434;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border: 0;
  border-radius: 8px;
  color: ${theme.background1};
  background-color: ${theme.colorHighlight6};

  &:active {
    box-shadow: inset 0 0 4px #181818
  }

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }

  label: comment-form-submit-button
`

export default CommentForm;
