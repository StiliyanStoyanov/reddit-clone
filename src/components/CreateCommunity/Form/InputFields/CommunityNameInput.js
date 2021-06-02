/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import FieldDescription from "./FieldsExtras/FieldDescription";
import {input_field_base} from "../../styles/input_styles";
import ErrorMessage from "../Error/ErrorMessage";
import {descriptions, tooltips, rules} from "./utils/utils";

const CommunityNameInput = ({register, error}) => {
    return (
        <div>
            <label htmlFor="communityName" css={css`display: block`}>Name *</label>
            <FieldDescription
                description={descriptions.communityName}
                tooltip={tooltips.communityName}
            />
            <input
                css={input_field_base}
                type="text"
                {...register("communityName", rules.communityName)}
                autoComplete="off"
            />
            <ErrorMessage error={error}/>
        </div>
    )
};

export default CommunityNameInput;

