/** @jsx jsx */
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import {css, jsx} from "@emotion/core";
import {ErrorIcon} from "./ErrorIcon";
import {useEffect} from "react";

const ErrorMessage = ({error}) => {
    useEffect(() => {
        if (error && error.type.startsWith('create-community') && document.activeElement !== error.ref) {
            error.ref.focus();
        }
    }, [error]);

    if (error) {
        return (
            <div css={errorField}>
                <ErrorIcon icon={faExclamationTriangle}/>
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
export default ErrorMessage;
