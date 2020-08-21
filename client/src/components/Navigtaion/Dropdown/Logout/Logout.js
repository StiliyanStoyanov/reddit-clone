/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import {LogoutIcon} from "./LogoutIcon";

const Logout = ({logoutAction, user}) => {

    return (
        <LogoutContainer onClick={logoutAction}>
            <LogoutIcon/>
            <LogoutText>Logout</LogoutText>
        </LogoutContainer>
    )
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