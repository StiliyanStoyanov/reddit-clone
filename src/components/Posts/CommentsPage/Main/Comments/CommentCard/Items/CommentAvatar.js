/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Avatar from "../../../../../../shared/Avatar/Avatar";
import {Link} from "react-router-dom";
const CommentAvatar = ({avatarUrl, author}) => {
    return (
        <Link css={[link_container]} to={`/user/${author}`}>
            <Avatar avatarUrl={avatarUrl} username={author} size={50}/>
        </Link>
    );
};
const link_container = css`
  margin-right: 8px;
  label: comment-avatar-container
`

export default CommentAvatar;
