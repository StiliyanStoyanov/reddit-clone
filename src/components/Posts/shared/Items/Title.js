/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";

// TODO: replace with title
export const Title = ({ title, postId }) => {
    const theme = useTheme();
    return <h3 css={titleContainer(theme.post)}>{postId}</h3>;
}

const titleContainer = theme => css`
  font-size: 16px;
  margin: 0 8px;
  font-weight: 600;
  color: ${theme.titleColor};
  max-height: 40px;
  word-break: break-all;
`

export default Title

