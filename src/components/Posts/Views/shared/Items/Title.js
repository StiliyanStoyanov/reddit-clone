/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

export const Title = ({ title, postId }) => {
    return <h3 css={titleContainer}>{postId}</h3>;
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const titleContainer = css`
  font-size: 16px;
  margin: 0 8px;
  font-weight: 600;
  color: #d7dadc;
  height: 20px;
`

export default Title

