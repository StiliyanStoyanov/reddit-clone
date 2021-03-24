/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// TODO: Replace placeholders
const CommentContent = ({content}) => {
    return (
        <p css={[p, {label: 'comment-content'}]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, odio?
        </p>
    );
};
const p = css`
  margin: 0;
  label: comment-content-p
`
export default CommentContent;
