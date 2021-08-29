/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {overlay} from "../../../styles/general_styles";

const ToggleFormButton = ({children, ...props}) => {
    return (
        <div css={[buttonContainer]}>
            <button css={[button]} type="button" {...props}>
                {children}
            </button>
        </div>

    );
};
const buttonContainer = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  label: toggle-form-button-container
`

const button = theme => css`
  ${overlay(theme.hover2, 1)};
  border: 1px solid ${theme.colorHighlight2};
  color: ${theme.colorHighlight2};
  outline-offset: 3px;
  background-color: transparent;
  padding: 4px 16px;
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  label: toggle-form-button
`

export default ToggleFormButton;
