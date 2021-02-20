/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {css, jsx} from '@emotion/core';
import ViewSelector from "./ViewSelector/ViewSelector";
import {Router, useNavigate} from "@reach/router";
import SingleCommunity from "./Pages/SingleCommunity";
import SinglePost from "./Pages/SinglePost";
import AllCommunities from "./Pages/AllCommunities";
import {NotFound} from "../NotFound";

export const Posts = () => {
    const [view, setView] = useState('card');
    const [sort, setSort] = useState('top');
    const navigate = useNavigate();
    return (
        <div css={container}>
            <button onClick={() => {navigate('/all')}}>Navigate</button>
            <ViewSelector
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
            />
            <Router primary={false}>
                {["/", "/all"].map(page => <AllCommunities key={page} view={view} sort={sort} path={page}/>)}
                <SingleCommunity view={view} sort={sort} path="/e/:communityId"/>
                <SinglePost view={view} path="/e/:communityId/comments/:postId/:postName"/>
                <NotFound default/>
            </Router>
        </div>
    );
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const container = css`
  max-width: 700px;
  margin: 0 auto
`



