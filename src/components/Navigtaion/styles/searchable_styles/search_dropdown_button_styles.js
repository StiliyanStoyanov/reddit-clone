import {css} from "@emotion/react";

export const search_button = theme => css`
  color: ${theme.color1};
  border: 1px solid ${theme.border1};
  height: 30px;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 4px;
  width: 180px;
  margin-right: 5px;
  background-color: transparent;
  margin-left: auto;
  user-select: none;
  cursor: pointer;
  @media (max-width: 880px) {
    width: 40px;
  }
  label: searchable-dropdown-toggle
`
export const location_container = theme => css`
  color: ${theme.color1};
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`
export const location_text_span = theme => css`
  font-size: 14px;
  color: ${theme.color1};
  overflow: hidden;
  margin: 0 4px;
  @media (max-width: 880px) {
    display: none;
  }
`

export const location_community_image = imageUrl => css`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-image: url("${imageUrl}");
  background-repeat: no-repeat;
  background-size: contain;
`