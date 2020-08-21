/** @jsx jsx */
import {forwardRef, useState} from "react";
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {MoonIcon} from "./MoonIcon";
import useStore from "../../../../store/useStore";

const ThemeSwitch = forwardRef((props, ref) => {
    const [checked, setChecked] = useState(true);
    const [store, setStore] = useStore();
    const changeTheme = () => {
        setStore({...store, isThemeDark: !store.isThemeDark})
        setChecked(!checked);
    }

    return (
        <ThemeSwitchContainer onClick={changeTheme} ref={ref}>
            <MoonIcon/>
            <ThemeText>Night Mode</ThemeText>
            <ThemeCheckbox type="checkbox" checked={checked} readOnly/>
        </ThemeSwitchContainer>
    )
});
/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const ThemeSwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover {
    background-color: ${ ({theme}) => theme.dropdownHoverColor };
  }
`
const ThemeText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
  cursor: default;
`

const ThemeCheckbox = styled.input`
  margin-left: auto;
  position: relative;
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