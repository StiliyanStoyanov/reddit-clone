/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const FormSelectButton = ({isActive, onClick, children}) => {
    return (
        <button
            onClick={onClick}
            css={[button, isActive && button_active]}
        >
            {children}
        </button>
    );
};

const button = theme => css`
  color: ${theme.color1};
  border-bottom: 3px solid transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.2;
  outline-offset: 6px;
  padding: 0;
  height: 28px;
  background-color: transparent;
  label: form-select-button
`

const button_active = theme => css`
  border-bottom: 3px solid ${theme.colorHighlight2};
  label: -active
`

export default FormSelectButton;
