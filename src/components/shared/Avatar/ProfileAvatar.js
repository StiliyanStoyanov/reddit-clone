/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
import {animation} from "../../Loaders/styles/animation_style";
import Avatar from "./Avatar";

const ProfileAvatar = ({size = 60, className = null}) => {
    const {avatarUrl, username, isLoadingFirestore} = useUserStore();
    if (isLoadingFirestore) return <div css={[animation, avatar_loader(size)]} className={className}/>
    return <Avatar avatarUrl={avatarUrl} username={username} size={size} className={className}/>;
};
const avatar_loader = (size) => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
`
export default ProfileAvatar;
