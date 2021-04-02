/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ErrorMessage = ({error}) => {
    return (
        <div css={[div]}>{error.message}</div>
    );
};
const div = css`
  font-size: 12px;
  position: absolute;
  bottom: -16px;
  left: 4px;
  color: #ff9eae;
  label: form-input-error
`

export default ErrorMessage;
