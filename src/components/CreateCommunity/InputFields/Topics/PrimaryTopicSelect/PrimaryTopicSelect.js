/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {inputFieldBase} from "../../../../../styles/CreateCommunity/inputFieldBase";

const PrimaryTopicSelect = ({register, topics, selectedPrimaryTopics}) => {
    const options = topics.map(topic => <option key={topic} value={topic}>{topic}</option>);
    return (
        <div css={css`display: flex`}>
            <select
                css={[inputFieldBase, selectedPrimaryTopics && isSelected]}
                defaultValue={""}
                {...register("primaryTopic", {
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

const isSelected = css` 
  border: 0; 
  &:focus {
    border: 1px solid #999797
  };
`

export default PrimaryTopicSelect;
