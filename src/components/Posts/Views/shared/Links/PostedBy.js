/** @jsx jsx */
import React from "react";
import {Link} from "@reach/router";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const PostedBy = ({author}) => {
    const theme = useTheme();
    return (
        <div css={container(theme.post)}>
            <span>Posted By</span>
            <Link css={link} to={`/user/${author}`}>
                u/{author}
            </Link>
        </div>
    )
}
const container = theme => css`
  font-size: 12px;
  color: ${theme.infoPostedByColor};
`
const link = css`
  position: relative;
  z-index: 2;
  margin-left: 3px;
  display: inline-block;
  text-decoration: none;
  span, a {
    color: inherit;
  }
  &:hover { 
    text-decoration: underline;
  }
`;

export default PostedBy