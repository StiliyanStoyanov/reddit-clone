/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import FieldDescription from "../FieldsExtras/FieldDescription";
import ErrorMessage from "../../Error/ErrorMessage";
import {useWatch} from "react-hook-form";
import PrimaryTopicSelect from "./PrimaryTopicSelect/PrimaryTopicSelect";
import CustomSelect from "../../../shared/CustomSelect/CustomSelect";

const topics = [
        'Animals and Pets', 'Anime', 'Art', 'Business, Economics and Finance',
        'Careers', 'Cars and Motor Vehicles', 'Crypto', 'Family and Relationships', 'Fitness and Nutrition',
        'Food and Drink', 'Funny/Humor', 'Gaming', 'History', 'Hobbies', 'Home and Garden',
        'Internet Culture and Memes', 'Law', 'Learning and Education', 'Marketplace and Deals',
        'Military', 'Movies', 'Music', 'Outdoors and Nature', 'Politics', 'Programming', 'Reading, Writing and Literature',
        'Religion and Spirituality', 'Science', 'Sexual Orientation', 'Sports', 'Technology', 'Television', 'Travel', 'World News',
        'None of those Topics'
    ]
//<editor-fold desc="Long Tooltip Message Variable">
const tooltipMessage =
    "At least one main topic must be selected after selecting a topic more can be added," +
    " if no theme matches the community you are creating," +
    " there is an none of the above option at the bottom of the list";
// </editor-fold>


const SelectTopics = ({register, control, descriptionText, topicsError}) => {
    const selectedPrimaryTopic = useWatch({
        control,
        name: 'primaryTopic',
        defaultValue: ""
    });
    // Topics list filtered from the primary selected topic and none of those additionalTopics options
    // since the additional additionalTopics component doesn't need to see those values;
    const topicsListWithExclusions = topics.filter(topic => topic !== selectedPrimaryTopic && topic !== "None of those Topics");
    return (
        <div css={css`position: relative; z-index: 1`}>
            <label htmlFor="primaryTopic" css={css`display: block; margin-top: 40px`}>Topics *</label>
            <FieldDescription descriptionText={descriptionText} tooltipMessage={tooltipMessage}/>
            <PrimaryTopicSelect register={register} topics={topics} selectedPrimaryTopics={selectedPrimaryTopic}/>
            {selectedPrimaryTopic && <CustomSelect register={register} list={topicsListWithExclusions}/>}
            <ErrorMessage error={topicsError}/>
        </div>
    );
};

export default SelectTopics;
