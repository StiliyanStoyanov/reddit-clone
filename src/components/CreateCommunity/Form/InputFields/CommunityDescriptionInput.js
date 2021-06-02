/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import {input_field_base} from "../../styles/input_styles";
import FieldDescription from "./FieldsExtras/FieldDescription";
import ErrorMessage from "../Error/ErrorMessage";
import {descriptions, rules} from "./utils/utils";

const CommunityDescriptionInput = ({register, error}) => {
    return (
        <div css={container}>
            <label htmlFor="communityDescription" css={css`display: block; margin-top: 40px`}>
                Description *
            </label>
            <FieldDescription description={descriptions.communityDescription}/>
            <textarea
                css={[
                    input_field_base,
                    textarea
                ]}
                {...register("communityDescription", rules.communityDescription)}
                autoComplete="off"
            />
            <ErrorMessage error={error}/>
        </div>
    );
};
const container = css`position: relative
`
const textarea = css`
  resize: vertical;
  max-height: 400px;
  min-height: 40px;
  padding-top: 6px;
`

export default CommunityDescriptionInput;
