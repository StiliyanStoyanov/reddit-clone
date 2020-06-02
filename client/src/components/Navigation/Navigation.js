/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "@emotion/styled";
import { unit, colors } from "../../styles";
import { Logo, Dropdown, Search } from "./NavLinks";

// TODO: Fix routing

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkGray};
  border: 1px solid ${colors.white};
  padding: ${unit}px ${unit * 2}px;
`

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


export default Navigation