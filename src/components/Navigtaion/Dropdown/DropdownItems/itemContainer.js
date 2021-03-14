import {css} from "@emotion/react";

const itemContainer = theme => css`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover, &:focus-visible {
    background-color: ${theme.nav.hoverOverlay };
  };
`

export default itemContainer