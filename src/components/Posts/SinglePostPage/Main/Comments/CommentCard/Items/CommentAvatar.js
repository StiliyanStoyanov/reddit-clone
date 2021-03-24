/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// TODO: Replace placeholders
const CommentAvatar = ({src}) => {
    return (
        <div css={[container]}>
            <img css={[img]}/>
        </div>
    );
};
const container = css`
  margin-right: 8px;
  label: comment-avatar-container
`
const img = css`
  display: block;
  background-color: teal;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  label: comment-avatar-img
`

export default CommentAvatar;
