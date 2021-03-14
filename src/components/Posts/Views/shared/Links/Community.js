/** @jsxImportSource @emotion/react */
import React from "react";
import {Link} from "@reach/router";
import {css, useTheme} from "@emotion/react";
import Image from "./Image";

const Community = ({name, imageUrl}) => {
    const theme = useTheme();
    return (
        <div css={[container]}>
            {imageUrl && <Image imageUrl={imageUrl} name={name}/>}
            <Link css={linkStyle(theme.post)} to={`/e/${name}`}>e/{name}</Link>
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
  color: ${theme.infoCommunityNameColor};
  &:hover {
    text-decoration: underline;
  }
  label: community-link
`

export default Community