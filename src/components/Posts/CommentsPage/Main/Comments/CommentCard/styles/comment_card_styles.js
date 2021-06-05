import {css} from "@emotion/react";
import {overlay} from "../../../../../../../styles/general_styles";

export const button_primary = theme => css`
  margin-top: 4px;
  background-color: transparent;
  ${overlay(theme.hover1, 1)};
  color: ${theme.color2};
  font-size: 12px;
  &:hover, &:focus-visible {
    color: ${theme.colorHighlight1};
  }
  padding: 4px;
  margin-right: 4px;
  border-radius: 4px
`
export const button_secondary = theme => css`
  ${button_primary(theme)}
`;