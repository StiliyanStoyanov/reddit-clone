/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import {css, jsx} from "@emotion/core";
import {inputFieldBase} from "../../../styles/CreateCommunityPage/inputFieldBase";
import FieldDescription from "./FieldsExtras/FieldDescription";

const DescriptionInput = ({register, descriptionText}) => {
    return (
        <>
            <label htmlFor="descriptionText" css={css`display: block; margin-top: 40px`}>Description *</label>
            <FieldDescription descriptionText={descriptionText}/>
            <textarea
                css={css`
                  ${inputFieldBase};
                  resize: vertical;
                  max-height: 400px;
                  min-height: 40px;
                  padding-top: 6px;`
                }
                name="descriptionText"
                ref={register({required: true, minLength: 3, maxLength: 300})}
                autoComplete="off"
            />
        </>
    );
};

export default DescriptionInput;
