import {css} from "@emotion/react";

export const global_styles = theme => css`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    background-color: ${theme.backgroundGlobal};
    color: ${theme.colorGlobal};
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  &:focus-visible:not(:focus-visible) {
    outline: 0;
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
  //p, h1, h2, h3, h4, h5, h6 {
  //  &:first-of-type, &:last-of-type {
  //    margin: 0;
  //  }
  //}
`