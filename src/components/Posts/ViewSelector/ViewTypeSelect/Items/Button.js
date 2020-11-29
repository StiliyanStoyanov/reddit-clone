/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Button = ({children, ...props}) => {
    const theme = useTheme();
    return (
        <button css={buttonStyle(theme)} {...props}>
            {children}
        </button>
    );
};

const buttonStyle = theme => css`
  color: ${theme.itemDefault};
  border: 0;
  background-color: transparent;
  outline-offset: -1px;
  cursor:pointer;
  &:hover, &:focus-visible {
    color: ${theme.itemHighlight};
    background-color: ${theme.itemHighlightBackground};
     & svg {
      fill: ${theme.itemHighlight};
    }
  }
  &:not(:first-of-type) {
    border-top: 1px solid ${theme.borderColor};
  }
  &:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  &:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center
`

export default Button;
