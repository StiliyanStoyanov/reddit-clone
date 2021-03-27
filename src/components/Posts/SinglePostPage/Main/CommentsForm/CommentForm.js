/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useForm, useWatch} from "react-hook-form";
import {firestore} from "../../../../../firebase";
import {useParams} from "react-router";
import {useUserStore} from "../../../../../store/UserStoreProvider";

const CommentForm = () => {
    const {user} = useUserStore();
    const {createPost, singlePost} = useTheme();
    const {register, control, handleSubmit} = useForm();
    const {communityId, postId} = useParams();
    const comment = useWatch({
        control,
        name: 'comment',
        defaultValue: ''
    });
    const onSubmit = (data) => {
        const path = `/communities/${communityId}/posts/${postId}/comments`
        firestore.collection(path).add({
            author: user.displayName,
            comment: data.comment
        }).then(() => {
            console.log('comment created');
        }).catch(err => console.error(err))
    }
    return (
        <form css={form} onSubmit={handleSubmit(onSubmit)}>
             <textarea
                 ref={register}
                 css={textarea(createPost)}
                 placeholder="What do you think ?"
                 name="comment"
             />
            <button type="submit" disabled={!comment} css={button(singlePost)}>
                Comment
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
  width: 99%;
  margin: 0 auto;
  min-height: 80px;
  color: ${theme.color};
  border-color: ${theme.borderColor};
  border-radius: 4px;
  background-color: ${theme.backgroundColor};
  padding: 8px 16px;
  overflow-x: hidden;
  overflow-wrap: break-word;
  &:focus {
    border-color: ${theme.borderColorOnFocus};
  }
  label: comment-form-textarea
`
const button = theme => css`
  width: 120px;
  height: 30px;
  box-shadow: 1px 1px 1px 0 #343434;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border: 0;
  border-radius: 8px;
  color: ${theme.buttonTextColor};
  background-color: ${theme.anchorColor};
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
