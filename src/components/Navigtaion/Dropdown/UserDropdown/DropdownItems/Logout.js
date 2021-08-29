/** @jsxImportSource @emotion/react */
import React from "react";
import {auth} from "../../../../../firebase";
import {useUserStore} from "../../../../../store/UserStore/UserStoreProvider";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {dropdown_item_button} from "../../../../../styles/dropdown_styles";
import DropdownSpan from "../../DropdownItems/DropdownSpan";
import {useDropdownMethods} from "../../Dropdown";

const Logout = () => {
    const {user} = useUserStore();
    const {closeDropdown} = useDropdownMethods();
    const handleLogoutButtonClick = async (event) => {
        await auth.signOut().catch(err => console.error(err));
        closeDropdown(event);
    }

    if (!user) {
      return null;
    }
    return (
        <button css={[dropdown_item_button]} tabIndex={0} onClick={handleLogoutButtonClick}>
            <DropdownIcon icon={faSignOutAlt}/>
            <DropdownSpan>Logout</DropdownSpan>
        </button>
    );
}

export default Logout