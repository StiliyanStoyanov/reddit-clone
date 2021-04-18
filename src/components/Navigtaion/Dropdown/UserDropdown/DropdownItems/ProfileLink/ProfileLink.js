import React from "react";
import {Username} from "./Username";
import {Avatar} from "./Avatar";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import DropdownLink from "../../../DropdownItems/DropdownLink";

export const ProfileLink = () => {
    const {user} = useUserStore();
    if (!user) {
        return null
    }
    return (
        <DropdownLink to={`/user/${user.displayName}`}>
            <Avatar/>
            <Username username={user.displayName}/>
        </DropdownLink>
    );
}
export default ProfileLink