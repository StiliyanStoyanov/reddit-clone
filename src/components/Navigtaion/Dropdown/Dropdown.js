/** @jsxImportSource @emotion/react */
import {useRef, useState} from "react";
import {css, useTheme} from "@emotion/react";
import DropdownToggle from "./DropdownToggle";
import FocusLock from "react-focus-lock";
import {useClickOutside} from "../../../hooks/useClickOutside";

const Dropdown = ({icon, children}) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [isFocusLocked, setIsFocusLocked] = useState(false);
    const dropdownRef = useRef();
    const toggleDropdown = () => setOpen(prevState => !prevState);
    const enableFocusLock = () =>  setIsFocusLocked(true);
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
            <div css={dropdownContentContainer(theme, open)}>
                <FocusLock disabled={!isFocusLocked} returnFocus={true}>
                    {children(propsToPass)}
                </FocusLock>
            </div>
        </div>
    );
};

const dropdownContentContainer = (theme, open) => css`
  position: absolute;
  padding: 8px;
  margin-top: 8px;
  z-index: 2;
  background-color: ${theme.nav.backgroundColor};
  width: 360px;
  border-radius: 8px;
  top: 60px;
  right: 8px;
  overflow: auto;
  border: 1px solid ${theme.borderColor};
  display: ${open ? 'block' : 'none'};
  label: dropdown-content-container
`;

const dropdownMenuContainer = css`
  z-index: 1;
  margin-right: 5px;
  border-radius: 50%;
  label: dropdown-menu-container
`
export default Dropdown

