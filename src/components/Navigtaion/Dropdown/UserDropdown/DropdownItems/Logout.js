/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import {jsx} from "@emotion/core";
import firebase from "../../../../../firebase";
import {useUserDispatch, useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import DropdownItemContainer from "../../DropdownItems/DropdownItemContainer";
import {itemTextStyle} from "../../../../../styles/Navigation/dropdownItemsStyles";

const Logout = () => {
    const {user} = useUserStore();
    const dispatch = useUserDispatch();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            dispatch({type: "LOGOUT"});
        }).catch(err => {
            console.error('LOGOUT ERROR: ', err);
        });
    }

    if (user) {
        return (
            <DropdownItemContainer tabIndex={0} onClick={logout} role="button">
                <DropdownItemIcon icon={faSignOutAlt}/>
                <span css={itemTextStyle}>Logout</span>
            </DropdownItemContainer>
        );
    } else {
        return null;
    }
}

export default Logout