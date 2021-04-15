import {css} from "@emotion/react";

export const type_select_and_fields_container = theme => css`
  background-color: ${theme.background1};
  border-radius: 4px;
`
export const fields_container = theme => css`
  ${type_select_and_fields_container(theme)};
  padding: 16px;
`
const text_area_base = theme => css`
  width: 100%;
  outline: none;
  color: ${theme.colorGlobal};
  border: 1px solid ${theme.border1};
  border-radius: 4px;
  background-color: ${theme.background1};
  &:focus {
    border-color: ${theme.colorHighlight1};
  }
`
export const post_text_area = theme => css`
  ${text_area_base(theme)};
  padding: 8px 16px;
  resize: vertical;
  overflow-x: hidden;
  overflow-wrap: break-word;
`
export const link_text_area = theme => css`
  ${text_area_base(theme)};
  padding: 8px 16px;
  resize: none;
  overflow-x: hidden;
  overflow-wrap: break-word;
`
export const title_text_area = theme => css`
  ${text_area_base(theme)};
  height: 32px;
  resize: none;
  padding: 8px 68px 8px 16px;
  margin-bottom: 8px;
  overflow-y: hidden;
  overflow-wrap: break-word;
`;