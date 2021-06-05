import {css} from "@emotion/react";
import {overlay_before, overlay_custom_attribute, ul_reset} from "../../../styles/general_styles";

const search_box_shadow = theme => css`
  box-shadow: 0 0 2px 1px ${theme.boxShadow2};
  label: box-shadow
`
const search_base = theme => css`
  display: block;
  border: 1px solid ${theme.border1};
  background-color: ${theme.background1};
  min-width: 300px;
  width: 50%;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const search_input_container = theme => css`
  ${search_base(theme)};
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 12px;
  height: 40px;
  border-radius: 4px;
  label: input-container-community-selector
`
export const community_selector_container = css`
  position: relative;
  margin-bottom: 8px;
  label: community-selector-container
`
export const search_dropdown_container = theme => css`
  ${search_base(theme)};
  position: absolute;
  visibility: hidden;
  max-height: 300px;
  padding: 3px;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: auto;
  label: search-dropdown-container
`

export const search_input_active = theme => css`
  ${search_box_shadow(theme)};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  label: active
`
export const search_dropdown_active = theme => css`
  ${search_box_shadow(theme)};
  visibility: visible;
  z-index: 3;
  label: active
`

export const ul = css`
  ${ul_reset};
  overflow: auto;
  label: community-selector-ul
`
export const list_heading = theme => css`
  font-size: 12px;
  line-height: 12px;
  padding: 12px 16px 3px;
  color: ${theme.color2};
  margin: 0;
  label: community-selector-heading
`
export const item_base = css`
  display: flex;
  position: relative;
  border-radius: 4px;
  align-items: center;
  padding: 4px 8px;
`
export const li = theme => css`
  ${item_base};
  ${overlay_before(theme.hover1)}
  ${overlay_custom_attribute(0.8)}
  label: community-selector-li
`
export const li_image = css`
  display: block;
  width: 32px;
  height: 32px;
  margin: 2px 8px 2px 0;
  border-radius: 50%;
  label: community-selector-li-image
`
export const li_community_name = css`
  font-size: 14px;
  font-weight: 500;
  label: community-selector-li-name
`
export const li_community_subs = theme => css`
  color: ${theme.color2};
  font-size: 12px;
  font-weight: 400;
  label: community-selector-li-subs
`