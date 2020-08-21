/* eslint-disable no-unused-vars */
/** @jsx jsx */
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";
import Dropdown from "./Dropdown/Dropdown";
import LogoAndSearch from "./LogoAndSearch/LogoAndSearch";
import AuthContainer from "./Auth/AuthContainer";

const Navigation = ({ logoutAction, user, loading}) => {
    return (
        <header>
            <NavigationBar>
                <LogoAndSearch/>
                {!user && <AuthContainer/>}
                <DropdownContainer>
                    <Dropdown user={user} logoutAction={logoutAction}/>
                </DropdownContainer>
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
  background-color: ${({theme}) => theme.navBackgroundColor};
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
  padding: 3px;
`
const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  margin-left: auto;
  cursor:pointer;
`;

export default Navigation