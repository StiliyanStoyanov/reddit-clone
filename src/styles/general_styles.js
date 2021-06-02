import {css, keyframes} from "@emotion/react";

export const button_reset = css`
  cursor: pointer;
  background-color: transparent;
  position: relative;
  border: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  label: button
`
export const overlay_before = (backgroundColor) => css`
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
export const overlay = (backgroundColor, opacity) => css`
  &:hover::before, &:focus-visible::before {
    opacity: ${opacity};
  }
  ${overlay_before(backgroundColor)};
`;
export const page_overlay = (zIndex = 1, backgroundColor = `rgba(0, 0, 0, 0.5)`) => css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex};
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundColor}
`
export const overlay_custom_attribute = opacity => css`
  &[data-selected=true] {
    &::before {
      opacity: ${opacity};
    }
  }
`
export const link_clear_decoration = css`text-decoration: none; &:hover {text-decoration: none}`;
export const padding_margin_reset = css`padding: 0; margin: 0`;
export const ul_reset = css`list-style-type: none; ${padding_margin_reset}`;
export const overflow_hidden = css`overflow: hidden; white-space: nowrap`;
export const text_overflow_ellipsis = css`${overflow_hidden}; text-overflow: ellipsis`;
export const flex_align_center = css`display: flex; align-items: center`;
export const flex_grow_1 = css`flex-grow: 1`;
export const flex_row = css`display: flex; flex-flow: row`;
export const flex_column = css`display: flex; flex-flow: column`;
export const rotate = degNumber => css`transform: rotate(${degNumber}deg)`;
export const box_shadow = theme => css`box-shadow: 0 2px 4px 0 ${theme.boxShadow1}`;


const ripple_keyframes = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`
export const ripple = css`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple_keyframes} 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
  
`
