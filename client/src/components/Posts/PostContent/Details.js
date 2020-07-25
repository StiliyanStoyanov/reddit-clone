/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core"
import { colors } from "../../../styles";
import {Link} from "@reach/router";

// TODO: Convert date to represent how much time ago it was posted instead of the actual date

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
    date = `${date.getFullYear()}/${getDateConcatZero(date.getMonth())}/${getDateConcatZero(date.getDate())}`

    return (
        <div css={container}>
            <Link css={imageLink} to={`${subForum}`}><img css={imageLink} src={subThumbnail} alt="None" /></Link>
            <Link css={subForumLink} to={`${subForum}`}>{subForum}</Link>
            <div>Posted By<Link css={postedByLink} to={`/user/${creator}`}>u/{creator}</Link></div>
            <div css={createDate}>{date}</div>
        </div>
    )
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const container = css`
  font-size: 12px;
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 8px 8px;
  position: relative;
  overflow: hidden;
`;

const imageLink = css`
  position: relative;
  z-index: 2;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const subForumLink = css`
  position: relative;
  z-index: 2;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textWhite};
  margin-right: 5px;
  &:hover { 
      text-decoration: underline;
  }
`
const postedByLink = css`
  position: relative;
  z-index: 2;
  display: inline-block;
  padding-left: 5px;
  text-decoration: none;
  color: ${colors.textColor};
  &:hover { 
      text-decoration: underline;
  }
`;

const createDate = css`
  margin-left: 5px;
`;

