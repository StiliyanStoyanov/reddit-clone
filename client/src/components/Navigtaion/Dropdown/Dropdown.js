/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useRef, useState} from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import {faPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import Logout from "./Logout/Logout";
import User from "./User/User";
import {useClickOutside} from "../../../hooks/useClickOutside";


const DropdownMenu = ({user, logoutAction, menu}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const themeRef = useRef();

    const onClickOutside = () => {
        setOpen(false);
    };
    const showHideContent = (event) => {
        setOpen(!open);
    }

    useClickOutside(dropdownRef, onClickOutside, open, themeRef);
    return (
        <Dropdown ref={dropdownRef}>
            <UserIconContainer onClick={showHideContent} open={open}>
                <UserIcon icon={faUser}/>
            </UserIconContainer>
            <DropdownContent open={open}>
                <User user={user}/>
                <ThemeSwitch ref={themeRef}/>
                <Logout logoutAction={logoutAction}/>
            </DropdownContent>
        </Dropdown>
    );
};

/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const Dropdown = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  cursor:pointer;
  padding-left: 5px;
  @media (max-width: 1000px) {
    
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${ ({theme}) => theme.navBackgroundColor };
  width: 360px;
  border-radius: 8px;
  top: 50px;
  left: -318px;
  overflow: auto;
  border: 1px solid ${ ({theme}) => theme.borderColor };
  display: ${props => props.open ? 'block' : 'none'};
  @media (max-width: 1000px) {
  
  }
}
`;
const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.navIconsBackgroundColor};
  &:hover {
    background-color: ${({theme}) => theme.navIconsHoverBackground};
    opacity: 1;
  }
  color: ${({open, theme}) => open ? theme.navIconActiveColor : null};
`
const UserIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  opacity: 0.8;
`;

const CreateIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  opacity: 0.8;
  path {fill: ${ ({theme}) => theme.navIconsPathFillColor} }
`

export default DropdownMenu

