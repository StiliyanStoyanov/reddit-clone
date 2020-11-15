/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react';
import {css, jsx} from "@emotion/core";
import {inputFieldBase} from "../../../styles/CreateCommunity/inputFieldBase";
import FieldDescription from "./FieldsExtras/FieldDescription";
import ErrorMessage from "../Error/ErrorMessage";
import {useTheme} from "emotion-theming";

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
