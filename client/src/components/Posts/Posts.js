/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {css, jsx} from '@emotion/core';
import { colors } from "../../styles";
import { arrowsColors } from "../../styles";
import data from "../../data.json";
import { Arrow } from "./ArrowSvg";
import { PostsContainer } from "./PostsContainer";

const { borderColor, backgroundColor, textWhite} = colors


const content = css`
  position: relative;
  z-index: 2;
`

const upvote = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  padding: 8px 4px 8px 0;
  border-left: 4px solid transparent;
  height: 100%;
  overflow: hidden;
  text-wrap: normal;
  align-items: center;
`
const voteArrows = css`
  font-size: 16px;
`
const upvoteCount = css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${textWhite}
`

export const Posts = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const post = data[0];


    return (
        <>
            <PostsContainer>
                <div css={upvote}>
                    <div css={voteArrows}>
                        <Arrow direction={'up'}/>
                        <div css={upvoteCount}>999</div>
                        <Arrow direction={'down'}/>
                    </div>
                </div>
                <div css={content}> Stuff </div>
            </PostsContainer>
        </>
    )
}