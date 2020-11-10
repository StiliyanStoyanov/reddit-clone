import React from "react";
import Dropdown from "../Dropdown";
import ProfileLink from "./DropdownItems/ProfileLink/ProfileLink";
import ThemeSwitch from "./DropdownItems/ThemeSwitch";
import Logout from "./DropdownItems/Logout";
import SignLink from "./DropdownItems/SignLink";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

const UserDropdown = () => {
    return (
        <Dropdown icon={faUser}>
            {props => (
                <>
                    <ProfileLink {...props}/>
                    <ThemeSwitch/>
                    <Logout {...props}/>
                    <SignLink {...props}/>
                </>
            )}
        </Dropdown>
    )
};

export default UserDropdown