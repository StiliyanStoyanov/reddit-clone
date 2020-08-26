/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import firebase from "../../../../firebase";
import {LogoutIcon} from "./LogoutIcon";
import {useStore} from "../../../../store/StoreProvider";

const Logout = () => {
    const {user} = useStore();
    const logout = () => {
        firebase.auth().signOut().catch(err => {
            console.error('LOGOUT ERROR: ', err);
        })
    }

    if (user) {
        return (
            <LogoutContainer onClick={logout}>
                <LogoutIcon/>
                <LogoutText>Logout</LogoutText>
            </LogoutContainer>
        );
    } else {
        return null;
    }

}

/* STYLED COMPONENTS || STYLES USED IN THIS FILE BELOW */
const LogoutContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px;
  cursor:pointer;
  user-select: none; 
  &:hover {
    background-color: ${ ({theme}) => theme.dropdownHoverColor }
  }
`
const LogoutText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default Logout