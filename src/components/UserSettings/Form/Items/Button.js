/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Button = ({children, disabled, ...props}) => {
    return (
        <div css={[container]}>
            <button css={[button]} disabled={disabled} {...props}>
                {children}
            </button>
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
`
const button = theme => css`
  color: ${theme.color1};
  border: 1px solid transparent;
  border-radius: 2px;
  &:active {
    background-color: #acaeb0;
  }
  label: form-button
`

export default Button;
