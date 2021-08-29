/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Avatar from "../shared/Avatar/Avatar";
import {Link} from "react-router-dom";
import CreatedAt from "../Posts/CommentsPage/Aside/CommunityInfo/Items/CreatedAt";
import {faPen} from "@fortawesome/free-solid-svg-icons/faPen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserCard = ({user, isAuthUser}) => {
    const {username, avatarUrl, createdAt} = user;
    return (
        <div css={[container]}>
            <div css={profile_background}>
                <button css={edit_button}>
                    <FontAwesomeIcon icon={faPen}/>
                </button>
            </div>
            <div css={[relative]}>
                <Avatar css={user_page_avatar} size={80} username={username} avatarUrl={avatarUrl}/>
                <Link css={a} to={`/user/${username}`}>{`u/${username}`}</Link>
            </div>
            <p>THIS IS ABOUT USER</p>
            <CreatedAt createdAt={createdAt}/>
        </div>
    );
};
const user_page_avatar = theme => css`
  border-radius: 12px;
  ${theme.background1};
`;

const edit_button = css`
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  font-size: 20px;
  position: absolute;
  border-radius: 50%;
  right: 4px;
  bottom: 4px;
`
const relative = css`
  position: relative;
`
const container = css`
  position: relative;
  padding: 24px;
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
  background-color: gray;
`

const profile_background = css`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  background-color: royalblue;
  height: 76px
`
const a = css`
  font-size: 16px;
  font-weight: 700;
`

export default UserCard;
