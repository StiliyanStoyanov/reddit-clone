/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

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
  cursor: pointer;
  border: 1px solid ${theme.settings.button};
  color: ${theme.settings.button};
  background-color: transparent;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 3px 16px;
  label: toggle-form-button
`

export default ToggleFormButton;
