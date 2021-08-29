import {css, keyframes} from "@emotion/react";

const ripple_keyframes = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`
const ripple = css`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple_keyframes} 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
`
const button = theme => css`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  background-color: #6200ee;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3); /* black with 30% opacity */
  cursor: pointer;
`