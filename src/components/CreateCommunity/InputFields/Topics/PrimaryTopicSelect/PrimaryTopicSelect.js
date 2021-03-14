/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {inputFieldBase} from "../../../../../styles/CreateCommunity/inputFieldBase";

const PrimaryTopicSelect = ({register, topics, selectedPrimaryTopics}) => {
    const options = topics.map(topic => <option key={topic} value={topic}>{topic}</option>);
    const theme = useTheme();
    return (
        <div css={css`display: flex`}>
            <select
                css={css([inputFieldBase(theme), selectedPrimaryTopics && css`border: 0; &:focus {border: 1px solid #999797;}`])}
                name="primaryTopic"
                defaultValue={""}
                ref={register({
                    required: {value: true, message: "A primary topic is required please select one"}
                })}
            >
                <option value="" disabled>
                    Select Topic
                </option>
                {options}
            </select>
        </div>
    );
};

export default PrimaryTopicSelect;
