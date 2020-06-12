import { css } from "@emotion/core";

export const padding = '6px';
export const unit = 8;
export const colors = {
    backgroundColor: '#1a1a1b',
    inputBackground: '#272729',
    textColor: '#a5a6a8',
    textWhite: '#d7dadc',
    borderColor: '#343536',
    borderHover: '#818384',
    white: '#ffffff',
    black: '#000000',

};
export const arrowsColors = {
    hoverBackground: 'rgba(215, 218, 220, 0.1)',
    arrowColor: '#818384',
    upvoteRed: '#ff4500',
    downvoteBlue: '#7193ff'
}
export const border = {
    radius: '8px'
}

export const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: ${unit * 3}px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${colors.black};
    color: ${colors.textColor}
  }
  *, *::before, *::after {
    box-sizing: inherit
  }
`