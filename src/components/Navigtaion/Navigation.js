/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import AuthContainer from "./Auth/AuthContainer";
import CreateDropdown from "./Dropdown/CreateDropdown/CreateDropdown";
import UserDropdown from "./Dropdown/UserDropdown/UserDropdown";
import Searchable from "./Searchable/Searchable";
import {NavLogo} from "./NavLogo/NavLogo";
import {container_center, container_left, container_right} from "./styles/navigation_styles";
import NavSearch from "./Search/NavSearch";

const Navigation = () => {
    return (
        <nav css={[nav]}>
            <div css={[container_left]}>
                <NavLogo/>
            </div>
            <div css={[container_center]}>
                <NavSearch/>
            </div>
            <div css={[container_right]}>
                <Searchable/>
                <AuthContainer/>
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
  height: 71px;
  align-items: center;
  background-color: ${theme.background1};
  border-bottom: 1px solid ${theme.border1};
  padding: 3px;
  label: navigation
`


export default Navigation