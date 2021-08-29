/** @jsxImportSource @emotion/react */
import React from "react";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";
import ImageLink from "./ImageLink";

const CommunityLink = ({name, imageUrl}) => {
    return (
        <div css={[container]}>
            {imageUrl && <ImageLink imageUrl={imageUrl} name={name}/>}
            <Link css={link_style} to={`/e/${name}`}>e/{name}</Link>
        </div>
    )
}

const container = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  label: link-container
`

const link_style = theme => css`
  position: relative;
  z-index: 2;
  font-weight: 600;
  color: ${theme.colorHighlight1};
  label: community-link
`

export default CommunityLink