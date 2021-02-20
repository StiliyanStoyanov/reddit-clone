/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import {Link} from "@reach/router";
import {jsx, css} from "@emotion/core";
import {colors} from "../../../../../styles";
import Image from "./Image";


const Community = ({name, imageUrl}) => {
    return (
        <div css={container}>
            {imageUrl && <Image imageUrl={imageUrl} name={name}/>}
            <Link css={linkStyle} to={`/e/${name}`}>e/{name}</Link>
        </div>
    )
}

const container = css`
  display: flex;
  align-items: center;
`

const linkStyle = css`
  position: relative;
  z-index: 2;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textWhite};
  &:hover {
    text-decoration: underline;
  }
`

export default Community