/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRipple} from "../../../hooks/useRipple";

const RippleButton = ({children, onMouseDown, shouldRipple = true, ...props}) => {
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
    );
};

const button = css`
  overflow: hidden;
  label: ripple-button
`

export default RippleButton;
