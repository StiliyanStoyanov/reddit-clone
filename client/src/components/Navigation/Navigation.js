/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "@emotion/styled";
import { unit, colors } from "../../styles";
import { Logo, Dropdown, Search } from "./NavLinks";

// TODO: Fix routing

const Navigation = () => {
    return (
        <NavigationBar>
            <Logo/>
            <Dropdown panel={'Communities'}/>
            <Search/>
            <Dropdown panel={'User Panel'}/>
        </NavigationBar>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const NavigationBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundColor};
  border-bottom: 1px solid ${colors.borderColor};
  padding: 3px;
`

export default Navigation