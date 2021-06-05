/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {link_clear_decoration} from "../../../../../../styles/general_styles";

const CommunityLink = ({name, imageUrl}) => {
    return (
        <Link css={[link]} to={`/e/${name}`}>
            <img css={[img]} src={imageUrl} alt="not-found"/>
            <span>{`e/${name}`}</span>
        </Link>
    );
};
const link = css`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 16px;
  font-weight: 700;
  ${link_clear_decoration};
  label: community-info-community-link
`
const img = css`
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  label: community-info-community-image
`


export default CommunityLink;
