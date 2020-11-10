/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import firebase from "../../../../../firebase";
import {useUserDispatch, useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import DropdownItemContainer from "../../DropdownItems/DropdownItemContainer";

const Logout = (props) => {
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
            <DropdownItemContainer tabIndex={0} onClick={logout}>
                <DropdownItemIcon icon={faSignOutAlt}/>
                <LogoutText>Logout</LogoutText>
            </DropdownItemContainer>
        );
    } else {
        return null;
    }
}

/* STYLED COMPONENTS || STYLES USED IN THIS FILE BELOW */
const LogoutText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default Logout