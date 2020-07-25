/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import { Details } from "./Details";
import { Title } from "./Title";
import { Info } from "./Info";
import { Bottom } from "./Bottom";
import { Link } from "@reach/router";
import {css, jsx} from "@emotion/core";



export const PostContent = ({ post }) => {

    return (
        <Container>
            <Link css={ContainerLink} to={`/${post.subForum}/${post.postId}`}/>
            <Details
                subThumbnail={post.subThumbnail}
                subForum={post.subForum}
                creator={post.creator}
                createdAt={post.createdAt}/>
            <Title postName={post.postName}/>
            <Info img={post.img ? post.img : 'Image Not Found'}/>
            <Bottom/>
        </Container>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ContainerLink = css`
  position: absolute;
  z-index: 2;
  top: -8px;
  left: 0;
  width: 100%;
  height: calc(100% + 8px);
  text-decoration: none;
`

