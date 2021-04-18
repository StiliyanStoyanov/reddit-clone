/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useUserDispatch, useUserStore} from "../../../../../store/UserStoreProvider";
import {userStoreActionTypes} from "../../../../../store/UserStoreProvider";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import {dropdown_item_button} from "../../../../../styles/dropdown_styles";
import DropdownSpan from "../../DropdownItems/DropdownSpan";
const {changeTheme} = userStoreActionTypes

const ThemeSwitch = () => {
    const {theme} = useUserStore();
    const dispatch = useUserDispatch();
    const checked = theme === 'dark';
    const handleChangeThemeButton = event => dispatch({type: changeTheme});

    return (
        <button css={dropdown_item_button} tabIndex={0} onClick={handleChangeThemeButton}>
            <DropdownIcon icon={faMoon}/>
            <DropdownSpan>Night Mode</DropdownSpan>
            <input tabIndex={-1} css={[checkbox]} type="checkbox" checked={checked} readOnly/>
        </button>
    )
};
const checkbox = css`
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
  label: theme-checkbox
`

export default ThemeSwitch