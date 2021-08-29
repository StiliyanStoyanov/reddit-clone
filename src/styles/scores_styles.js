import {css} from "@emotion/react";
import {overlay, flex_row, flex_column} from "./general_styles";

const scores_base = css`
  position: relative;
  font-size: 16px;
  label: scores
`
export const scores_horizontal = css`
  ${scores_base};
  ${flex_row};
  align-items: center;
  label: horizontal
`
export const scores_vertical = css`
  ${scores_base};
  ${flex_column};
  align-items: center;
  label: vertical
`
export const scores_vertical_to_horizontal = css`
  ${scores_vertical};
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 4px 8px 0;
  border-left: 4px solid transparent;
  height: 100%;
  @media (max-width: 420px) {
    ${scores_horizontal};
    border: 0;
    padding: 0;
    margin-right: 4px;
  }
`
export const arrow_svg_base = theme => css`
  width: 20px;
  fill: ${theme.color2};
  height: auto;
  border-radius: 2px;
`
export const arrow_svg_active = color => css`
  fill: ${color};
`
export const scores_button = (theme, arrowActiveColor) => css`
  ${overlay(theme.hover1, 0.7)};
  &:hover {
    svg {
      fill: ${arrowActiveColor};
    }
  }
  &:active {
    &::before {
      opacity: 1;
    }
  }
  background-color: transparent;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  label: -scores
`
export const count_span = theme => css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${theme.colorHighlight1};
  margin: 0 4px;
`
