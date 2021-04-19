/** @jsxImportSource @emotion/react */
import React from "react";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";
import Image from "./Image";

const Community = ({name, imageUrl}) => {
    return (
        <div css={[container]}>
            {imageUrl && <Image imageUrl={imageUrl} name={name}/>}
            <Link css={linkStyle} to={`/e/${name}`}>e/{name}</Link>
        </div>
    )
}

const container = css`
  display: flex;
  align-items: center;
  label: link-container
`

const linkStyle = theme => css`
  position: relative;
  z-index: 2;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colorHighlight1};
  &:hover {
    text-decoration: underline;
  }
  label: community-link
`

export default Community