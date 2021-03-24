/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const CommentScores = () => {
    const handleUpvote = () => {
        console.log('upvote button')
    }
    const handleDownvote = () => {
        console.log('downvote button')
    }

    return (
        <div css={[container, {label: 'comment-scores-container'}]}>
            <button onClick={handleUpvote} css={[button, {label: 'comment-scores-button'}]}/>
            <span css={[span, {label: 'comment-scores-count'}]}>5</span>
            <button onClick={handleDownvote} css={[button, {label: 'comment-scores-button'}]}/>
        </div>
    );
};

const container = css`
  display: flex;
  margin-top: 4px
`
const button = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0;
  background-color: teal;
`
const span = css`margin: 0 4px`

export default CommentScores;
