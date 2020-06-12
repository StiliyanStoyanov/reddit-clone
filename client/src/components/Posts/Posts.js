/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {css, jsx} from '@emotion/core';
import data from "../../data.json";
import { PostContainer } from "./PostContainer";
import { Votes } from "./Votes/Votes";
import { PostContent } from "./Content/PostContent";




export const Posts = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPosts(data);
        setLoading(false);
        // if (posts !== undefined) {
        //     console.log(posts[0]);
        // }
    }, [posts])
    return (
        posts ? posts.map((post) => {
            return (
                <div key={post.postId}>
                    <PostContainer>
                        <Votes upvotes={post.upvotes}/>
                        <PostContent post={post}/>
                    </PostContainer>
                </div>
            )
        }) : <div> Loading </div>
    )
}