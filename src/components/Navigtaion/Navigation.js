import React from "react";
import styled from "@emotion/styled";
import LogoAndSearch from "./LogoAndSearch/LogoAndSearch";
import AuthContainer from "./Auth/AuthContainer";
import CreateDropdown from "./Dropdown/CreateDropdown/CreateDropdown";
import UserDropdown from "./Dropdown/UserDropdown/UserDropdown";

const Navigation = () => {
    return (
        <header>
            <NavigationBar>
                <LogoAndSearch/>
                <AuthContainer/>
                <DropdownMenusContainer>
                    <CreateDropdown/>
                    <UserDropdown/>
                </DropdownMenusContainer>
            </NavigationBar>
        </header>

    );
}
/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const NavigationBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.nav.backgroundColor};
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
  padding: 3px;
`

const DropdownMenusContainer = styled.div`
  margin-left: auto;
  display: flex;
`

export default Navigation