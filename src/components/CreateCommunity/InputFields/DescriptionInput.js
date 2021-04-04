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
                css={css(
                    inputFieldBase,
                    {
                        resize: "vertical",
                        maxHeight: "400px",
                        minHeight: "40px",
                        paddingTop: "6px"
                    }
                )}
                {...register("descriptionText", {
                    required: {value: true, message: "Description is required"}
                })}
                autoComplete="off"
            />
            <ErrorMessage error={descriptionError}/>
        </div>
    );
};

export default DescriptionInput;
