/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import {css, jsx} from "@emotion/core";
import FieldDescription from "./FieldsExtras/FieldDescription";
import {inputFieldBase} from "../../../styles/CreateCommunityPage/inputFieldBase";

const SelectTopics = ({register, descriptionText}) => {
    const topics =
        [
            'Animals and Pets', 'Anime', 'Art', 'Business, Economics and Finance',
            'Careers', 'Cars and Motor Vehicles', 'Crypto', 'Family and Relationships', 'Fitness and Nutrition',
            'Food and Drink', 'Funny/Humor', 'Gaming', 'History', 'Hobbies', 'Home and Garden',
            'Internet Culture and Memes', 'Law', 'Learning and Education', 'Marketplace and Deals',
            'Military', 'Movies', 'Music', 'Outdoors and Nature', 'Politics', 'Programming', 'Reading, Writing and Literature',
            'Religion and Spirituality', 'Science', 'Sexual Orientation', 'Sports', 'Technology', 'Television', 'Travel', 'World News',
            'None of those Topics'
        ]
    const options = topics.map(topic => <option key={topic} value={topic}>{topic}</option>)
    return (
        <>
            <label htmlFor="topics" css={css`display: block; margin-top: 40px`}>Topics *</label>
            <FieldDescription descriptionText={descriptionText}/>
            <select css={inputFieldBase} name="topics" defaultValue={""}
                    ref={register({required: true})}>
                <option value="" disabled>Select Topic</option>
                {options}
            </select>
        </>
    );
};

export default SelectTopics;
