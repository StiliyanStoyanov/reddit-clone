/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import FieldDescription from "./FieldsExtras/FieldDescription";
import {inputFieldBase} from "../../../styles/CreateCommunity/inputFieldBase";
import ErrorMessage from "../Error/ErrorMessage";
import {validateCommunityName} from "../../../utils/validateCommunityName";

//<editor-fold desc="Long Tooltip Message Variable">
const tooltipMessage = "Community name must be between 3 and 24 characters." +
    " The only special character allowed is underscore," +
    " but keep in mind that a community cannot start or end with underscore" +
    " as well as multiple underscores one after another are not allowed."
// </editor-fold>
const NameInput = ({register, descriptionText, nameError}) => {

    return (
        <div>
            <label htmlFor="communityName" css={css`display: block`}>Name *</label>
            <FieldDescription
                descriptionText={descriptionText}
                tooltipMessage={tooltipMessage}
            />
            <input
                css={inputFieldBase}
                type="text"
                {...register("communityName",{
                    required: {value: true, message: "Community name is required"},
                    minLength: {value: 3, message: "Community name must be at least 3 characters long"},
                    maxLength: {value: 24, message: "Community name cannot exceed 24 characters"},
                    validate: validateCommunityName
                })}
                autoComplete="off"
            />
            <ErrorMessage error={nameError}/>
        </div>
    )
};

export default NameInput;

