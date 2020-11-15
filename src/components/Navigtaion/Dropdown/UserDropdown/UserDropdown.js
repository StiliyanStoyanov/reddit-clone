import React from "react";
import Dropdown from "../Dropdown";
import ProfileLink from "./DropdownItems/ProfileLink/ProfileLink";
import ThemeSwitch from "./DropdownItems/ThemeSwitch";
import Logout from "./DropdownItems/Logout";
import SignLink from "./DropdownItems/SignLink";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import SettingsLink from "./DropdownItems/SettingsLink";

const UserDropdown = () => {
    return (
        <Dropdown icon={faUser}>
            {props => (
                <>
                    <ProfileLink {...props}/>
                    <SettingsLink {...props}/>
                    <ThemeSwitch/>
                    <Logout {...props}/>
                    <SignLink {...props}/>
                </>
            )}
        </Dropdown>
    )
};

export default UserDropdown