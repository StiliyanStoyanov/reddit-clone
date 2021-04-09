/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ErrorMessage = ({error}) => {
    if (!error) {
        return null;
    }
    return (
        <div css={[container]}>
            {error && error.message}
        </div>
    );
};

const container =  css`
  position: absolute;
  left: 4px;
  bottom: 0;
  color: #e29dab;
  label: auth-modal-error-message
`

export default ErrorMessage;
