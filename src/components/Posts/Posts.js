/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from '@emotion/react';
import {useState} from 'react';
import {Routes, useMatch} from "react-router";
import SinglePostPage from "./SinglePostPage/SinglePostPage";
import PostListingsWrapper from "./PostsListing/PostListingsWrapper";

export const Posts = () => {
    const [view, setView] = useState('card');
    const [sort, setSort] = useState('top');
    const postMatch = useMatch('/e/:communityId/comments/:postId');
    const communityMatch = useMatch('/e/:communityId');
    const baseMatch = useMatch('/');
    if (!communityMatch && !baseMatch && !postMatch) {
        return (
            <div>
                <p css={css`padding: 100px 0; text-align: center; margin: 0;`}>
                    Sorry, there doesn't seem to be anything here.
                </p>
            </div>
        )
    }
    return (
        <div id="posts-container">
            <PostListingsWrapper setView={setView} sort={sort} setSort={setSort}/>
            <Routes>
                <SinglePostPage path="/e/:communityId/comments/:postId"/>
            </Routes>
        </div>

    );
};



