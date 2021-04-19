/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";

// TODO: replace with title
export const Title = ({ title, postId }) => {

    return <h3 css={titleContainer}>{postId}</h3>;
}

const titleContainer = theme => css`
  font-size: 16px;
  margin: 0 8px;
  font-weight: 600;
  color: ${theme.colorHighlight1};
  max-height: 40px;
  word-break: break-all;
`

export default Title

