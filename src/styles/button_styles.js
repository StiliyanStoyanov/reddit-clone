import {css} from "@emotion/react";
import {overlay} from "./general_styles";

export const button_primary =  css`
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  background-color: #3369ff;
  border: 0;
  border-radius: 4px;
  padding: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  &:active {
    box-shadow: inset 0 8px 28px -4px rgba(0, 0, 0, 0.2)
  }
  &:hover, &:focus-visible {
    background-color: #1844c8;
    outline-offset: 1px;
  }
  label: button-primary;
`

export const button_secondary = theme => css`
  ${overlay(theme.hover2, 1)};
  border: 1px solid ${theme.colorHighlight2};
  color: ${theme.colorHighlight2};
  outline-offset: 3px;
  background-color: transparent;
  padding: 4px 16px;
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  label: toggle-form-button
`