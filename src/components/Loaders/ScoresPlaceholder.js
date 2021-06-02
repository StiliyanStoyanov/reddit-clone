/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {
    arrow_svg_base,
    scores_horizontal,
    scores_vertical_to_horizontal,
} from "../../styles/scores_styles";
import ArrowSvg from "../Posts/shared/Scores/ArrowSvg";
import {rotate} from "../../styles/general_styles";

const ScoresPlaceholder = ({horizontalOnly = false}) => {
    return (
        <div css={[horizontalOnly ? scores_horizontal : scores_vertical_to_horizontal]}>
            <div css={arrow_container}>
                <ArrowSvg css={[arrow_svg_base, rotate(180)]}/>
            </div>
            <span css={separator}/>
            <div css={arrow_container}>
                <ArrowSvg css={[arrow_svg_base]}/>
            </div>
        </div>
    );
};

const arrow_container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`
const separator = css`
  border-radius: 4px;
  background-color: #a5a6a8;
  width: 14px;
  height: 6px;
  margin: 4px;
`

export default ScoresPlaceholder;
