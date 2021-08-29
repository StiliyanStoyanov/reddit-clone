/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Card from "./Card";
import {box_shadow, ul_reset} from "../../../styles/general_styles";
import {memo} from "react";

const Cards = ({data}) => {
    return (
        <ul css={[ul_reset, ul]}>
            {data.map(community =>  <Card key={community.id} {...community}/>)}
        </ul>
    );
};

const ul = theme => css`
  ${box_shadow(theme)};
  min-width: 350px;
  margin: 0 8px;
  border-radius: 4px;
  background-color: ${theme.background1};
  @media (max-width: 800px) {
    margin: 0;
  }
  label: cards-container
`;

export default Cards;
