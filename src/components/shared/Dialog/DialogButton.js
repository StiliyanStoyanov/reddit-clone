/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRipple} from "../../../hooks/useRipple";
import ButtonOne from "../Buttons/ButtonOne";
import {button_reset, overlay} from "../../../styles/general_styles";

const DialogButton = ({children, onMouseDown, shouldRipple = true, ...props}) => {
    const {ripples, createRipple} = useRipple();
    const handleMouseDown = event => {
        shouldRipple && createRipple(event);
        onMouseDown && onMouseDown(event);
    }
    return (
        <button css={button} onMouseDown={handleMouseDown} {...props}>
            {children}
            {ripples}
        </button>
    )
};
const button = theme => css`
  overflow: hidden;
  margin-left: 4px;
  color: ${theme.dialogBlue};
  padding: 6px 8px;
  font-size: 12px;
  font-weight: 700;
  ${overlay(theme.hover1, 1)}
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  label: dialog-button;
`
export default DialogButton;
