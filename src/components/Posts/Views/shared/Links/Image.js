/** @jsx jsx */
import React from "react";
import {Link} from "@reach/router";
import {jsx, css} from "@emotion/core";

const Image = ({imageUrl, name}) => {
    return (
        <Link css={imgLink} to={`/e/${name}`} tabIndex={-1}>
            <img css={imgLink} src={imageUrl} alt="None" />
        </Link>
    )
}


const imgLink = css`
  position: relative;
  border-radius: 50%;
  z-index: 2;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export default Image