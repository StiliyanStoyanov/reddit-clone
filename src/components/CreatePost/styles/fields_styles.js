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
const areas_padding = css`
  padding: 8px 16px;
`
export const post_textarea_container = theme => css`
  border: 1px solid ${theme.border1};
  border-radius: 4px;
  overflow: hidden;
`;
export const post_textarea_container_active = theme => css`
  border-color: ${theme.colorHighlight1};
`
export const markdown_description_container = theme => css`
  ${areas_padding};
  background-color: ${theme.background2};

`
export const markdown_description_span = css`
  font-size: 14px;
  font-weight: 500;
`
export const post_textarea = theme => css`
  border: 0;
  width: 100%;
  outline: none;
  color: ${theme.colorGlobal};
  background-color: ${theme.background1};
  border-radius: 0;
  border-top: 1px solid ${theme.border1};
  ${areas_padding};
  resize: vertical;
  overflow-x: hidden;
  overflow-wrap: break-word;
`;
export const link_textarea = theme => css`
  ${text_area_base(theme)};
  white-space: nowrap;
  ${areas_padding};
  resize: none;
  overflow-x: hidden;
  overflow-wrap: break-word;
`
export const title_textarea = theme => css`
  ${text_area_base(theme)};
  height: 32px;
  resize: none;
  padding: 8px 68px 8px 16px;
  margin-bottom: 8px;
  overflow-y: hidden;
  overflow-wrap: break-word;
`;