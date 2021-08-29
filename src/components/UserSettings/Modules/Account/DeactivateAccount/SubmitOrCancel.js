/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Button from "../../../Form/Items/Button";
import React from "react";

const SubmitOrCancel = ({ resetAndCloseForm, isSubmitting}) => {
    return (
        <div css={container}>
            <Button css={[cancelButton]} onClick={resetAndCloseForm}>Cancel</Button>
            <Button css={[deactivateButton]} disabled={isSubmitting}>Deactivate</Button>
        </div>
    );
};

const container = theme => css`
  display: flex; 
  justify-content: flex-end;
  label: buttons-container
`
const cancelButton = css`
  margin-right: 2px;
  label: cancel-button
`
const deactivateButton = css`
  background-color: red;
  label: deactivate-button
`

export default SubmitOrCancel;
