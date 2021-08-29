/** @jsxImportSource @emotion/react */
import {Username} from "./Username";
import ProfileAvatar from "../../../../../shared/Avatar/ProfileAvatar";
import DropdownLink from "../../../DropdownItems/DropdownLink";
import {useUserStore} from "../../../../../../store/UserStore/UserStoreProvider";
import {css} from "@emotion/react";

export const ProfileLink = () => {
    const {user, username} = useUserStore();
    if (!user) return null;
    return (
        <DropdownLink to={`/user/${username}`}>
            <ProfileAvatar size={60} css={profile_avatar}/>
            <Username username={username}/>
        </DropdownLink>
    );
}
const profile_avatar = css`margin: 8px 8px 12px 0;`
export default ProfileLink