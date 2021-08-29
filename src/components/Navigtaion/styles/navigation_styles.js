import {css} from "@emotion/react";
import {flex_align_center} from "../../../styles/general_styles";

export const container_right = css`
  ${flex_align_center};
  position: absolute;
  right: 0;
  @media (max-width: 960px) {
    position: relative;
  }
  label: right-container
`

export const container_left = css`
  ${flex_align_center};
  position: absolute;
  @media (max-width: 960px) {
    position: relative;
  }
  label: left-container
`

export const container_center = css`
  margin: 0 auto;
  width: 400px;
  @media (max-width: 960px) {
    position: relative;
    width: 60%;
  }
  padding: 0 8px;
  label: central-container
`
export const search_input_container = theme => css`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  color: ${theme.color1};
  border: 1px solid ${theme.border1};
  background-color: ${theme.background3};
  border-radius: 2px;
  &:hover, &:focus-within {
    background-color: ${theme.background1};
    border: 1px solid ${theme.colorHighlight1};
  }
`
export const search_input = css`
  background-color: transparent;
  width: 100%;
  color: inherit;
  border: 0;
  outline: 0;
  padding: 4px 8px;
`