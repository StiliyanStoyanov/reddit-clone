import {css} from "@emotion/react";
import {overlay} from "../../../../styles/general_styles";


export const view_selector_container = theme => css`
  display: flex;
  background-color: ${theme.background1};
  border: 1px solid ${theme.border1};
  border-radius: 8px;
  padding: 0 12px;
  margin-bottom: 16px;
  height: 56px;
  label: view-selector
`;

export const sort_button = theme => css`
  ${overlay(theme.hover1, 0.5)};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  color: ${theme.color2};
  height: 32px;
  margin-right: 8px;
  border-radius: 20px;
  padding: 0 8px;
  text-transform: capitalize;
  label: view-selector-sort-button
`
export const sort_button_active = theme => css`
  color: ${theme.colorHighlight2};
  background-color: ${theme.background2};
  label: active
`;

export const sort_icon = css`
  margin-right: 4px;
  margin-top: 2px;
  font-size: 20px;
  label: view-selector-sort-icon
`

export const view_button = theme => css`
  color: ${theme.color2};
  background-color: transparent;
  border: 0;
  outline-offset: -2px;
  cursor: pointer;

  &:hover, &:focus-visible {
    color: ${theme.colorHighlight1};
    background-color: ${theme.hover1};

    & svg {
      fill: ${theme.colorHighlight1};
    }
  }

  &:not(:first-of-type) {
    border-top: 1px solid ${theme.border1};
  }

  &:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  label: view-select-button
`

const view_svg = css`
  width: 20px;
  height: 20px;
  margin: 0 4px
`
export const view_icon_primary = theme => css`
  ${view_svg};
  fill: ${theme.colorHighlight2};
  label: view-select-icon
`
export const view_icon_secondary = theme => css`
  ${view_svg};
  fill: ${theme.color2};
  label: view-select-icon-secondary
`