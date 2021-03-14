/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";
import LogoAndSearch from "./LogoAndSearch/LogoAndSearch";
import AuthContainer from "./Auth/AuthContainer";
import CreateDropdown from "./Dropdown/CreateDropdown/CreateDropdown";
import UserDropdown from "./Dropdown/UserDropdown/UserDropdown";

const Navigation = () => {
    const theme = useTheme()
    return (
        <nav css={nav(theme)}>
            <LogoAndSearch/>
            <AuthContainer/>
            <div css={[div]}>
                <CreateDropdown/>
                <UserDropdown/>
            </div>
        </nav>
    );
}

const nav = theme => css`
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  background-color: ${theme.nav.backgroundColor};
  border-bottom: 1px solid ${theme.borderColor};
  padding: 3px;
  label: navigation-bar
`

const div = css`
  margin-left: auto;
  display: flex;
  label: dropdown-menu-container
`

export default Navigation