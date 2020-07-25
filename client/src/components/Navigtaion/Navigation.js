/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { Logo } from "./Logo";
import Dropdown from "./Dropdown/Dropdown";
import { Search } from "./Search";
import AuthContainer from "./Auth/AuthContainer";

// TODO: Fix routing
const Navigation = ({isAuth}) => {
    return (
        <NavigationBar>
            <Logo/>
            {isAuth && <Dropdown panel={'Communities'}/>}
            <Search/>
            {isAuth && <Dropdown panel={'User'}/>}
            {!isAuth && <AuthContainer/>}
        </NavigationBar>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const NavigationBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundColor};
  border-bottom: 1px solid ${colors.borderColor};
  padding: 3px;
`

export default Navigation