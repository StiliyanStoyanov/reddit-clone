/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const Button = ({children, disabled, ...props}) => {
    const theme = useTheme();
    return (
        <div css={container}>
            <button css={button(theme)} disabled={disabled} {...props}>
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
  background-color: ${theme.settings.formButtonBackground};
  color: ${theme.settings.formButtonColor};
  border: 1px solid transparent;
  border-radius: 2px;
  &:hover, &:focus-visible {
    background-color: ${theme.settings.formButtonHover};
  }
  &:active {
    background-color: #acaeb0;
  }
`

export default Button;
