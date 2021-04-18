import React from "react";
import Dropdown from "../Dropdown";
import ProfileLink from "./DropdownItems/ProfileLink/ProfileLink";
import ThemeSwitch from "./DropdownItems/ThemeSwitch";
import Logout from "./DropdownItems/Logout";
import SignButton from "./DropdownItems/SignButton";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import SettingsLink from "./DropdownItems/SettingsLink";

const UserDropdown = () => {
    return (
        <Dropdown icon={faUser}>
            <ProfileLink/>
            <SettingsLink/>
            <ThemeSwitch/>
            <Logout/>
            <SignButton/>
        </Dropdown>
    )
}

export default UserDropdown