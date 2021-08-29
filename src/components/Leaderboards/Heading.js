/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {box_shadow} from "../../styles/general_styles";

const Heading = () => {

    return (
        <div css={[container]}>
            <h1 css={[heading]}>Top Communities</h1>
            <span css={[span_description]}>Find the top communities in your favorite category</span>
        </div>

    );
};
const container = theme => css`
  text-align: center;
  padding: 8px;
  background-color: ${theme.background1};
  ${box_shadow(theme)};
  label: leaderboards-heading-container
`
const heading = css`
  margin: 0;
  label: leaderboards-heading
`
const span_description = theme => css`
  color: ${theme.color2};
  label: leaderboards-description
`


export default Heading;
