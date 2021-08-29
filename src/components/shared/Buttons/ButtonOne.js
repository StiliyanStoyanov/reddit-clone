/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {overlay} from "../../../styles/general_styles";
import {useRipple} from "../../../hooks/useRipple";

const ButtonOne = ({children, onMouseDown, shouldRipple = true, ...props}) => {
    const {ripples, createRipple} = useRipple();
    const handleMouseDown = event => {
        shouldRipple && createRipple(event);
        onMouseDown && onMouseDown(event);
    }
    return (
        <button css={[button]} onMouseDown={handleMouseDown} {...props}>
            {children}
            {ripples}
        </button>
    );
};

const button = theme => css`
  overflow: hidden;
  position: relative;
  ${overlay(theme.hover1, 1)};
  color: ${theme.color2};
  font-size: 12px;
  &:hover, &:focus-visible {
    color: ${theme.colorHighlight1};
  }
  margin-top: 4px;
  padding: 4px;
  margin-right: 4px;
  border-radius: 4px;
`

export default ButtonOne;
