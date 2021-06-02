import {css, keyframes} from "@emotion/react";

const move = keyframes`
  0% {
    background-position: 0 0
  }
  100% {
    background-position: -200% 0
  }
`
export const animation = theme => css`
  background: ${theme.animationBackground};
  background-size: 200%;
  animation: ${move} 1500ms ease 0ms infinite normal none running
`