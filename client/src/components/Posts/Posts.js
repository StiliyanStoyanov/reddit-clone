/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {css, jsx} from '@emotion/core';
import data from "../../data.json";
import {PostContainer} from "./PostContainer";
import {Votes} from "./Votes/Votes";
import {PostContent} from "./Content/Content";
import {useLocation} from "react-router";

// TODO: implement loader
export const Posts = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    let location = useLocation();

    useEffect(() => {
        setPosts(data);
        setLoading(false);
    }, [posts]);

    return (
        posts ? posts.map((post) => {
            return (
                <PostContainer key={post.postId}>
                    <PostContent post={post}/>
                    <Votes upvotes={post.upvotes}/>
                </PostContainer>
            )
        }) : <div> Loading </div>
    )
};



