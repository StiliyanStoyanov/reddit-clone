import {css} from "@emotion/react";

export const button_reset = css`
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  label: button
`
export const overlay = (backgroundColor, opacity) => css`
  &:hover::before, &:focus-visible::before {
    opacity: ${opacity};
  }

  &::before {
    content: '';
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${backgroundColor};
  }
`
export const pageOverlay = (backgroundColor, zIndex) => css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex ?? 1};
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundColor}
`
export const paddingMarginReset = css`
  padding: 0;
  margin: 0;
`
export const ulReset = css`
  list-style-type: none;
  ${paddingMarginReset};
`