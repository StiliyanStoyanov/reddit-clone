/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import LogoAndSearch from "./LogoAndSearch/LogoAndSearch";
import AuthContainer from "./Auth/AuthContainer";
import CreateDropdown from "./Dropdown/CreateDropdown/CreateDropdown";
import UserDropdown from "./Dropdown/UserDropdown/UserDropdown";
import DropdownMenus from "./Dropdown/DropdownItems/DropdownMenus";

const Navigation = () => {
    return (
        <nav css={[nav]}>
            <LogoAndSearch/>
            <AuthContainer/>
            <DropdownMenus>
                <CreateDropdown/>
                <UserDropdown/>
            </DropdownMenus>
        </nav>
    );
}

const nav = theme => css`
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  background-color: ${theme.background1};
  border-bottom: 1px solid ${theme.border1};
  padding: 3px;
  label: navigation
`


export default Navigation