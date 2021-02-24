/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

export const Title = ({ title, postId }) => {
    const theme = useTheme();
    return <h3 css={titleContainer(theme.post)}>{postId}</h3>;
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const titleContainer = theme => css`
  font-size: 16px;
  margin: 0 8px;
  font-weight: 600;
  color: ${theme.titleColor};
  max-height: 40px;
  word-break: break-all;
`

export default Title

