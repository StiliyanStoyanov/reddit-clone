import {css} from "@emotion/react";
import {link_clear_decoration, overlay, overlay_before} from "../../../styles/general_styles";

export const category_link = theme => css`
  position: relative;
  color: ${theme.color1};
  ${link_clear_decoration};
  display: flex;
  align-items: center;
  padding: 8px;
  font-weight: 700;
  ${overlay(theme.hover1, 0.7)};
`
export const category_link_active = theme => css`
  border-left: 4px solid ${theme.colorBlue};
  ${overlay_before(theme.hover1)}
  &::before {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    border-left: 0;
    border-bottom: 4px solid ${theme.colorBlue};
  }
`