/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import firebase from "../../../../../firebase";
import {useDispatch, useStore} from "../../../../../store/StoreProvider";
import ContentIcon from "../../shared/ContentIcons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import DropdownItemsContainer from "../../shared/DropdownItemsContainer";

const Logout = () => {
    const {user} = useStore();
    const dispatch = useDispatch();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            dispatch({type: "LOGOUT"});
        }).catch(err => {
            console.error('LOGOUT ERROR: ', err);
        });
    }

    if (user) {
        return (
            <DropdownItemsContainer onClick={logout}>
                <ContentIcon icon={faSignOutAlt}/>
                <LogoutText>Logout</LogoutText>
            </DropdownItemsContainer>
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