/** @jsxImportSource @emotion/react */
import {useTheme} from "@emotion/react";
import React from "react";
import firebase from "../../../../../firebase";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {itemTextStyle} from "../../../../../styles/Navigation/dropdownItemsStyles";
import itemContainer from "../../DropdownItems/itemContainer";

const Logout = ({toggleDropdown}) => {
    const theme = useTheme();
    const {user} = useUserStore();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            toggleDropdown();
        }).catch(err => {
            console.error('LOGOUT ERROR: ', err);
        });
    }

    if (user) {
        return (
            <div css={itemContainer(theme)} tabIndex={0} onClick={logout} role="button">
                <DropdownItemIcon icon={faSignOutAlt}/>
                <span css={itemTextStyle}>Logout</span>
            </div>
        );
    } else {
        return null;
    }
}

export default Logout