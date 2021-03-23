/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import CommentFormDescription from "./CommentFormDescription";
import CommentForm from "./CommentForm";

const CommentFormWrapper = () => {
    const userStore = useUserStore();
    const {user} = userStore

    if (!user) {
        return <div css={[error]}>LOGIN OR SIGN UP TO LEAVE A COMMENT</div>
    }
    return (
        <div css={[container]}>
            <CommentFormDescription user={user}/>
            <CommentForm/>
        </div>
    );
};
const container = theme => css`
  width: 100%;
  background-color: ${theme.createPost.backgroundColor};
  padding: 10px;
  label: comment-form-container
`
const error = css`
  text-align: center;
  label: comment-form-error
`

export default CommentFormWrapper;
