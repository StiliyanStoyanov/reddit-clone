/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import {css, jsx} from "@emotion/core";
import FieldDescription from "./FieldsExtras/FieldDescription";
import TooltipOnHover from "./FieldsExtras/TooltipOnHover";
import {inputFieldBase} from "../../../styles/CreateCommunityPage/inputFieldBase";

const NameInput = ({register, descriptionText}) => {
    return (
        <>
            <label htmlFor="communityName" css={css`display: block`}>Name *</label>
            <FieldDescription descriptionText={descriptionText} Tooltip={TooltipOnHover}/>
            <input
                css={inputFieldBase} type="text" name="communityName"
                ref={register({
                    required: true,
                    maxLength: 80
                })}
                autoComplete="off"
            />
        </>
    )
};

export default NameInput;

