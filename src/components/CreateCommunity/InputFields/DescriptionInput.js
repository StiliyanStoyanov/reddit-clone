/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import {inputFieldBase} from "../../../styles/CreateCommunity/inputFieldBase";
import FieldDescription from "./FieldsExtras/FieldDescription";
import ErrorMessage from "../Error/ErrorMessage";

const DescriptionInput = ({register, descriptionText, descriptionError}) => {
    return (
        <div css={css`position: relative`}>
            <label htmlFor="descriptionText" css={css`display: block; margin-top: 40px`}>Description *</label>
            <FieldDescription descriptionText={descriptionText}/>
            <textarea
                css={[
                    inputFieldBase,
                    textarea
                ]}
                {...register("descriptionText", {
                    required: {value: true, message: "Description is required"}
                })}
                autoComplete="off"
            />
            <ErrorMessage error={descriptionError}/>
        </div>
    );
};
const textarea = css`
  resize: vertical;
  max-height: 400px;
  min-height: 40px;
  padding-top: 6px;
`

export default DescriptionInput;
