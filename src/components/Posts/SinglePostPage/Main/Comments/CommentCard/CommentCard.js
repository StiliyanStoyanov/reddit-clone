/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import CommentAvatar from "./Items/CommentAvatar";
import CommentAuthor from "./Items/CommentAuthor";
import CommentContent from "./Items/CommentContent";
import CommentScores from "./Items/CommentScores";

const CommentCard = () => {
    const theme = useTheme();
    return (
        <div css={[container(theme)]}>
            <CommentAvatar/>
            <div css={{label: 'comment-content-container'}}>
                <CommentAuthor/>
                <CommentContent/>
                <CommentScores/>
            </div>
        </div>
    );
};

const container = theme => css`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  color: ${theme.singlePost.textColor};
  background-color: ${theme.nav.backgroundColor};
  min-width: 360px;
  max-width: 600px;
  width: 100%;
  padding: 8px 4px;
  label: comment-card
`

export default CommentCard;
