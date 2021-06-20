/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import FieldDescription from "../FieldsExtras/FieldDescription";
import ErrorMessage from "../../Error/ErrorMessage";
import {useWatch} from "react-hook-form";
import PrimaryTopicSelect from "./PrimaryTopicSelect";
import CustomSelect from "../../../../shared/CustomSelect/CustomSelect";
import {categories} from "../../../../../utils/categories";
import {descriptions, tooltips} from "../utils/utils";

const SelectTopics = ({register, setValue, control, error}) => {
    const primarySelected = useWatch({
        control,
        name: 'primaryTopic',
        defaultValue: ""
    });
    return (
        <div css={css`position: relative; z-index: 1`}>
            <label htmlFor="primaryTopic" css={css`display: block; margin-top: 40px`}>Topics *</label>
            <FieldDescription description={descriptions.communityTopics} tooltip={tooltips.communityTopics}/>
            <PrimaryTopicSelect register={register} topics={categories} primarySelected={primarySelected}/>
            {primarySelected &&
            <CustomSelect
                register={register}
                setValue={setValue}
                primarySelected={primarySelected}
            />}
            <ErrorMessage error={error}/>
        </div>
    );
};

export default SelectTopics;
