/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ErrorMessage = ({error}) => {
    if (error) {
        return (
            <div css={errorField}>
                <FontAwesomeIcon css={errorIcon} icon={faExclamationTriangle}/>
                <div css={errorMessage}>{error.message}</div>
            </div>
        );
    } else {
        return null
    }
};

const errorField = css`
  float: left;
  display: flex;
  align-items: center;
`
const errorMessage = css`
  font-size: 14px;
  padding-left: 2px;
  color: #ff9eae;
`
const errorIcon = css`
  width: 14px;
  height: 14px;
  color: #ff3f6b;
`
export default ErrorMessage;
