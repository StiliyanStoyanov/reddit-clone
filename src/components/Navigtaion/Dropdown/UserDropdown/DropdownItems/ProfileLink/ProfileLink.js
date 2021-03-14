import React from "react";
import {Name} from "./Name";
import {Avatar} from "./Avatar";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import DropdownLinkItem from "../../../DropdownItems/DropdownLinkItem";

export const ProfileLink = (props) => {
    const {user, username} = useUserStore();
    if (user) {
        return (
            <DropdownLinkItem
                to={`/user/${username}`}
                {...props}
            >
                <Avatar/>
                <Name username={username}/>
            </DropdownLinkItem>
        );
    } else {
        return null
    }
}
export default ProfileLink