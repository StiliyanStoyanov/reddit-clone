/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

export const Info = ({ img }) => {

    return (
        <div css={container}>
            <img css={imgCss} src={img} alt="Not Found"/>
        </div>
    )
}

const [detailsHeight, titleHeight, bottomHeight , padding] = [20, 23, 32, 8];

const imgCss = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const container = css`
  width: 100%;
  max-width: 100%;
  max-height: calc(100% - ${detailsHeight + titleHeight + bottomHeight + padding}px);
  height: 100%;
`



