/** @jsx jsx */
import {useRef, useState} from "react";
import {jsx, css} from "@emotion/core";
import DropdownToggle from "./DropdownToggle";
import FocusLock from "react-focus-lock";
import {useClickOutside} from "../../../hooks/useClickOutside";
import styled from "@emotion/styled";

const Dropdown = ({icon, children}) => {
    const [open, setOpen] = useState(false);
    const [isFocusLocked, setIsFocusLocked] = useState(false);
    const dropdownRef = useRef();
    const toggleDropdown = () => setOpen(prevState => !prevState);
    const enableFocusLock = () =>  setIsFocusLocked(true)
    const disableFocusLock = () => setIsFocusLocked(false);
    const onClickOutside = () => {
        setOpen(false);
        setIsFocusLocked(false);
    };
    const propsToPass = {open, toggleDropdown, enableFocusLock, disableFocusLock}
    useClickOutside(dropdownRef, onClickOutside, open);
    return (
        <div css={dropdownMenuContainer} ref={dropdownRef}>
            <DropdownToggle
                icon={icon}
                {...propsToPass}
            />
            <DropdownContentContainer open={open}>
                <FocusLock disabled={!isFocusLocked} returnFocus={true}>
                    {children(propsToPass)}
                </FocusLock>
            </DropdownContentContainer>
        </div>
    );
};
/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const DropdownContentContainer = styled.div`
  position: absolute;
  padding: 8px;
  margin-top: 8px;
  z-index: 2;
  background-color: ${({theme}) => theme.nav.backgroundColor};
  width: 360px;
  border-radius: 8px;
  top: 60px;
  right: 8px;
  overflow: auto;
  border: 1px solid ${({theme}) => theme.borderColor};
  display: ${props => props.open ? 'block' : 'none'};
`;

const dropdownMenuContainer = css`
  z-index: 1;
  margin-right: 5px;
  border-radius: 50%;
`
export default Dropdown

