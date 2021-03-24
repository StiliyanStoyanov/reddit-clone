/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

// TODO: Replace placeholders
const CommentAuthor = ({author, timeAgo}) => {
    return (
        <div css={[container]}>
            <a css={[a]} href="#">
                author
            </a>
            <span css={[span]}>
                4 months ago
            </span>
        </div>
    );
};
const container = css`
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  label: comment-author-container;
`
const a = css`
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
  label: comment-author-link;
`
const span = css`
  font-size: 14px;
  color: gray;
  font-weight: 100;
  label: comment-time-ago-span
`


export default CommentAuthor;
