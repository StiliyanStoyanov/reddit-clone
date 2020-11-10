/** @jsx jsx */
import {useState} from "react";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useUserDispatch} from "../../../../../store/UserStoreProvider";
import {UserStoreActionTypes} from "../../../../../store/UserStoreProvider";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import DropdownItemContainer from "../../DropdownItems/DropdownItemContainer";

const ThemeSwitch = () => {
    const theme = useTheme();
    const checkbox = theme.theme === 'dark';
    const [checked, setChecked] = useState(checkbox);
    const dispatch = useUserDispatch();
    const changeTheme = () => {
        dispatch({type: UserStoreActionTypes.CHANGE_THEME});
        setChecked(!checked);
    }
    const handleKeydown = event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            changeTheme();
        }
    }

    return (
        <div tabIndex={0} onKeyDown={handleKeydown} onMouseDown={e => e.preventDefault()}>
            <DropdownItemContainer tabIndex={-1} onMouseDown={changeTheme}>
                <DropdownItemIcon icon={faMoon}/>
                <span css={themeTextStyle}>Night Mode</span>
                <input tabIndex={-1} css={themeCheckboxStyle} type="checkbox" checked={checked} readOnly/>
            </DropdownItemContainer>
        </div>
    )
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const themeTextStyle = css`
  font-size: 0.9rem;
  padding: 10px 0;
`
const themeCheckboxStyle = css`
  margin-left: auto;
  position: relative;
  cursor:pointer;
  width: 52px;
  height: 28px;
  -webkit-appearance: none;
  background-color: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  transition: .5s;
  &:checked {
    background: #03a9f4;
    &:before {
      transform: translateX(24px);
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    top: 2px;
    left: 2px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: .5s;
  }
`

export default ThemeSwitch