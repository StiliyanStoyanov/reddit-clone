/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const CommentSignIn = () => {
    return (
        <div css={[container]}>
            <p>LOGIN OR SIGN UP TO LEAVE A COMMENT</p>
        </div>
    )
};

const container = css`
  text-align: center;
  label: comment-unauthenticated
`

export default CommentSignIn;
