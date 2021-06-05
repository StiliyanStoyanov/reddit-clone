import {css} from "@emotion/react";
import {button_reset} from "./general_styles";

export const global_styles = theme => css`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI Historic", "Segoe UI", "Arial", sans-serif;
    background-color: ${theme.backgroundGlobal};
    color: ${theme.colorGlobal};
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  &:focus-visible:not(:focus-visible) {
    outline: 0;
  }
  button {
    ${button_reset};
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    color: ${theme.colorBlue};
  }
  // Styles for markdown
  blockquote {
    background: ${theme.background2};
    border-left: 10px solid ${theme.hover1};
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
`