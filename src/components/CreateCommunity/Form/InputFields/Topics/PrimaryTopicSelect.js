/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {input_field_base} from "../../../styles/input_styles";
import {rules} from "../utils/utils";

const PrimaryTopicSelect = ({register, topics, primarySelected}) => {
    const options = topics.map(topic => <option key={topic} value={topic}>{topic}</option>);
    return (
        <div css={css`display: flex`}>
            <select
                css={[input_field_base, css`padding: 8px 0;`, primarySelected && select_active]}
                defaultValue={""}
                {...register("primaryTopic", rules.communityPrimaryTopic)}
            >
                <option value="" disabled>
                    Select Topic
                </option>
                {options}
            </select>
        </div>
    );
};
const select_active = css` 
  border: 0; 
  &:focus {
    border: 1px solid #999797
  };
`

export default PrimaryTopicSelect;
