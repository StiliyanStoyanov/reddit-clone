import React, {useRef} from "react";
import User from "./DropdownContent/UserProfile/User";
import ThemeSwitch from "./DropdownContent/ThemeSwitch";
import Logout from "./DropdownContent/Logout";
import SignUserLink from "./DropdownContent/SignUserLink";
import DropdownContentContainer from "../shared/DropdownContentContainer";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import TopIcon from "../shared/TopIcon";

const UserDropdownContent = ({dropdownRef, onClickOutside, open, showHideContent}) => {
    const themeRef = useRef();
    useClickOutside(dropdownRef, onClickOutside, open, themeRef);
    return (
        <>
            <TopIcon icon={faUser} showHideContent={showHideContent} open={open}/>
            <DropdownContentContainer open={open}>
                <User/>
                <ThemeSwitch ref={themeRef}/>
                <Logout/>
                <SignUserLink/>
            </DropdownContentContainer>
        </>

    )
}


export default UserDropdownContent