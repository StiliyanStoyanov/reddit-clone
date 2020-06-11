/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

// TODO: Fix up image scaling to be more responsive
export const Info = ({ img }) => {

    return (
        <div css={container}>
            <img css={imgCss} src={img} alt="Not Found"/>
        </div>
    )
}

const imgCss = css`
  display: block;
  width: 100%;
  max-height: 431px;
  object-fit: cover;
`

const container = css`
  width: 100%;
  max-width: 100%;
  max-height: calc(100% - 51px);
`



