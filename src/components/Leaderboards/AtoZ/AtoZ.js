/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {alphabet} from "../../../utils/alphabet";
import {box_shadow, link_clear_decoration} from "../../../styles/general_styles";

const AtoZ = ({ activeLetter }) => {
    return (
        <div css={[container]}>
            <p css={title}>Browse Communities A-Z</p>
            <div>
                {alphabet.map(char => {
                    return <Link css={[link, activeLetter === char && link_active]} key={char} to={`letter/${char}`}>{char}</Link>
                })}
            </div>
        </div>
    );
};

const container = theme => css`
  padding: 8px;
  border-radius: 4px;
  display: inline-block;
  max-width: 300px;
  background-color: ${theme.background1};
  ${box_shadow(theme)};
  @media (max-width: 800px) {
    max-width: none;
  }
`
const title = css`
  width: 100%;
  margin: 0;
  padding: 0 4px;
`
const link = theme => css`
  display: inline-block;
  ${link_clear_decoration};
  color: ${theme.colorBlue};
  font-weight: 700;
  text-transform: capitalize;
  padding: 0 4px;
`
const link_active = theme => css`
  box-shadow: 0 1px 0 white;
`


export default AtoZ;
