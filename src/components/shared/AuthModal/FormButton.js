/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRipple} from "../../../hooks/useRipple";

const FormButton = ({children, onMouseDown, shouldRipple = true, ...props}) => {
    const {ripples, createRipple} = useRipple(800, 3);
    const handleMouseDown = event => {
        shouldRipple && createRipple(event);
        onMouseDown && onMouseDown(event);
    }
    return (
        <button css={button} onMouseDown={handleMouseDown} {...props}>
            {children}
            {ripples}
        </button>
    );
};
const button = css`
  position: relative;
  overflow: hidden;
  color: #ffffff;
  font-size: 18px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  margin-top: 24px;
  background-color: #333dff;
  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15), inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
  &:disabled {
    background-color: rgba(51, 105, 255, 0.3);
    cursor: no-drop;
  }
  label: auth-form-button
`
export default FormButton;
