/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, {useEffect, useRef} from "react";
import { css, jsx } from "@emotion/core"
import { colors } from "../../../styles";

// TODO: Convert date to represent how much time ago it was posted instead of the actual date
// TODO: Change up subForum && creator styles and set them as actual links

export const Details = ({subThumbnail, subForum, creator, createdAt}) => {
    let date = new Date(createdAt);
    const getDateConcatZero = (number) => {
        if (number <= 9) {
            return `0${number}`
        }
        else {
            return `${number}`
        }
    }

    return (
        <div css={container}>
            <img css={imageCss} src={subThumbnail} alt="None" />
            <div css={innerContainer}>
                <div css={subName}>{subForum}</div>
                <div css={postedBy}>Posted by u/{creator}</div>
                <div css={createDate}>
                    {date.getFullYear()}/{getDateConcatZero(date.getMonth())}/{getDateConcatZero(date.getDate())}
                </div>
            </div>
        </div>
    )
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const container = css`
  font-size: 12px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 8px 8px;
  position: relative;
  overflow: hidden;
`;

const imageCss = css`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const innerContainer = css`
  display: flex;
  width: 100%;
`;

const subName = css`
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
  color: ${colors.textWhite};
`
const postedBy = css`
  margin-right: 5px;
`
const createDate = css`
  margin-right: 5px;
`