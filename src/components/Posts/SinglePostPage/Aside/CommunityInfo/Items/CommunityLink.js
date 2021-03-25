/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import ItemContainer from "../Containers/ItemContainer";

const CommunityLink = ({name, imageUrl}) => {
    return (
        <ItemContainer>
            <img css={[img]} src={imageUrl} alt="not-found"/>
            <Link css={[link]} to={`/e/${name}`}>e/{name}</Link>
        </ItemContainer>
    );
};
const img = css`
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  label: community-info-community-image
`
const link = css`
  font-size: 16px;
  font-weight: 700;
  label: community-info-community-link
`

export default CommunityLink;
