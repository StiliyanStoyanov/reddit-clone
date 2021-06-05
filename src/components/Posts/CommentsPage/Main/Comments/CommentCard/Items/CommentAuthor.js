/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {
    time_ago_popup_two,
    TimeAgo,
    TimeAgoPopup,
} from "../../../../../../shared/TimeAgo/TimeAgo";


const CommentAuthor = ({author, createdAt}) => {
    return (
        <div css={[container]}>
            <Link css={[a]} to={`user/${author}`}>
                {author}
            </Link>
            <TimeAgo timestamp={createdAt}>
                <TimeAgoPopup css={time_ago_popup_two} timestamp={createdAt}/>
            </TimeAgo>
        </div>
    );
};
const container =  css`
  margin-bottom: 2px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  label: comment-author-container;
`;
const a = css`
  margin-right: 4px;
  color: inherit;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
  label: comment-author-link;
`


export default CommentAuthor;
