/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, useTheme} from "@emotion/react";
import {inputFieldBase} from "../../../styles/CreateCommunity/inputFieldBase";
import FieldDescription from "./FieldsExtras/FieldDescription";
import ErrorMessage from "../Error/ErrorMessage";

const DescriptionInput = ({register, descriptionText, descriptionError}) => {
    const theme = useTheme();
    return (
        <div css={css`position: relative`}>
            <label htmlFor="descriptionText" css={css`display: block; margin-top: 40px`}>Description *</label>
            <FieldDescription descriptionText={descriptionText}/>
            <textarea
                css={css(
                    inputFieldBase(theme),
                    {
                        resize: "vertical",
                        maxHeight: "400px",
                        minHeight: "40px",
                        paddingTop: "6px"
                    }
                )}
                name="descriptionText"
                ref={register({
                    required: {value: true, message: "Description is required"}
                })}
                autoComplete="off"
            />
            <ErrorMessage error={descriptionError}/>
        </div>
    );
};

export default DescriptionInput;
