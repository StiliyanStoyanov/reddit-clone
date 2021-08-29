/** @jsxImportSource @emotion/react */
import CardCommunity from "./CardCommunity";
import CardAbout from "./CardAbout";
import CardSubscribers from "./CardSubscribers";
import {css} from "@emotion/react";

const Card = ({name, about, subscribers, imageUrl}) => {
    return (
        <li css={li}>
            <div css={container}>
                <CardCommunity name={name} imageUrl={imageUrl}/>
                <CardSubscribers subscribers={subscribers}/>
            </div>
            <CardAbout about={about}/>
        </li>
    );
};
const li = theme => css`
  padding: 8px 16px;
  border-bottom: 1px solid ${theme.border1};
  label: card
`

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label: container
`

export default Card;
