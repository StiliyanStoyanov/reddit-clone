import {css} from "@emotion/react";
import {link_clear_decoration, overlay, flex_align_center} from "./general_styles";

export const card_container = theme => css`
  position: relative;
  z-index: 1;
  margin: 10px auto;
  display: flex;
  padding-left: 36px;
  border: 1px solid ${theme.border1};
  background-color: ${theme.background1};
  border-radius: 4px;
  min-height: 88px;
  max-height: 500px;
  width: 100%;
  cursor: pointer;
  &:hover, &:active {
    border: 1px solid ${theme.color2};
  }
  @media (max-width: 420px) {
    padding-left: 4px;
  }
  label: card-container
`

export const compact_image_container = css`
  display: block;
  width: 80px;
  height: 60px;
  border-radius: 4px;
  label: image-container
`

export const link_overlay = css`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  label: card-link
`

export const bottom_item_base = theme => css`
  ${flex_align_center};
  position: relative;
  z-index: 2;
  color: #818384;
  font-size: 12px;
  font-weight: 700;
  margin-right: 4px;
  padding: 4px;
  border-radius: 4px;
  ${overlay(theme.hover1, 0.7)}
`
export const bottom_link = theme => css`
  ${bottom_item_base(theme)};
  ${link_clear_decoration};
  white-space: nowrap;
  word-break: normal;
`
export const bottom_link_icon = css`
  display: inline-block;
  font-size: 16px;
`
export const bottom_link_span = css`
  padding-bottom: 2px;
  padding-left: 4px;
`