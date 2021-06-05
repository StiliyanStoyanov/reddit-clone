import {css} from "@emotion/react";
import {overlay} from "./general_styles";

export const dropdown = css`
  z-index: 1;
  margin-right: 5px;
  border-radius: 50%;
  label: dropdown
`
export const dropdown_content = theme => css`
  position: absolute;
  padding: 8px;
  margin-top: 8px;
  z-index: 2;
  text-align: center;
  max-height: 500px;
  background-color: ${theme.background1};
  width: 360px;
  border-radius: 8px;
  right: 8px;
  overflow: auto;
  border: 1px solid ${theme.border1};
  display: none;
  label: dropdown-content-container
`
export const dropdown_content_visible = css`
  display: block;
`

export const dropdown_item = theme => css`
  position: relative;
  display: flex;
  color: ${theme.color1};
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  &:hover, &:focus-visible {
    background-color: ${theme.hover1};
    text-decoration: none;
  }
  label: dropdown-item
`
export const dropdown_item_button = theme => css`
  ${dropdown_item(theme)};
  width: 100%;
  border: 0;
  background: 0;
  color: inherit;
  label: button
`

export const dropdown_toggle_button = theme => css`
  ${overlay(theme.hover1, 1)};
  background-color: ${theme.background3};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  label: dropdown-toggle
`
export const dropdown_toggle_button_active = theme => css`
  background: ${theme.colorHighlight3};
  label: active
`
export const dropdown_toggle_icon = theme => css`
  font-size: 16px;
  color: ${theme.color1};
  label: dropdown-toggle-icon
`;
export const dropdown_toggle_icon_active = theme => css`
  color: ${theme.colorBlue};
  label: active
`