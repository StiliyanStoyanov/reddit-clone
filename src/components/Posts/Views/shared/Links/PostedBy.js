/** @jsx jsx */
import React from "react";
import {Link} from "@reach/router";
import {css, jsx} from "@emotion/core";
import {colors} from "../../../../../styles";

const PostedBy = ({author}) => {
    return (
        <div css={container}>
            Posted By
            <Link css={link} to={`/user/${author}`}>
                u/{author}
            </Link>
        </div>
    )
}
const container = css`
  font-size: 12px;
  color: ${colors.textColor};
`
const link = css`
  position: relative;
  z-index: 2;
  margin-left: 3px;
  display: inline-block;
  text-decoration: none;
  color: ${colors.textColor};
  &:hover { 
    text-decoration: underline;
  }
`;

export default PostedBy