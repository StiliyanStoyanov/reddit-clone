import {css} from "@emotion/react";
import {
  link_clear_decoration,
  overlay_before,
  overlay_custom_attribute,
  text_overflow_ellipsis
} from "../../../../styles/general_styles";

export const menu = css`label: menu;`
export const menu_list_heading = theme => css`
  color: ${theme.color2};
  margin: 0;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 16px 24px 8px;
`
export const menu_input = theme => css`
  color: ${theme.color1};
  border: 1px solid ${theme.border1};
  background-color: ${theme.background3};
  width: 90%;
  font-size: 14px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 2px;
  &:hover, &:focus-visible {
    outline: 0;
    background-color: ${theme.background1};
    border: 1px solid ${theme.colorHighlight1};
  }
  &::placeholder {
    font-size: 12px;
  }
`;
export const menu_list_link = theme => css`
  display: flex;
  color: ${theme.color1};
  font-size: 16px;
  line-height: 28px;
  position: relative;
  border-radius: 4px;
  align-items: center;
  padding: 4px 20px;
  ${link_clear_decoration};
  ${overlay_before(theme.hover1)}
  ${overlay_custom_attribute(0.8)}
  label: menu-item-link
`
export const menu_item_span = css`
  ${text_overflow_ellipsis};
  display: block;
  margin: 0;
  padding: 0 6px 3px;
`
export const star_icon_button = css`
  margin-left: auto;
  background-color: transparent;
`
export const star_icon = theme => css`
  font-size: 20px;
  color: ${theme.border1};
`
export const star_icon_active = theme => css`
  color: ${theme.colorHighlight2}
`
export const menu_item_icon_img = css`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
`
