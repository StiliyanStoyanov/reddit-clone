/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

export const Title = ({ postName }) => {
    return <div css={postNameStyles}>{postName}</div>;
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const postNameStyles = css`
  margin: 0 8px;
  font-size: 20px;
  height: 23px;
`

