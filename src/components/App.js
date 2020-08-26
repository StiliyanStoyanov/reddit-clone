/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Router} from "@reach/router";
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";
import Navigation from "./Navigtaion/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import {Posts} from "./Posts/Posts";
import {NotFound} from "./NotFound";
import {useStore} from "../store/StoreProvider";
import {useSessionLogin} from "../hooks/useSessionLogin";

const App = () => {
    const [posts, setPosts] = useState([]);
    const {user} = useStore();
    const isLoading = useSessionLogin();
    // TODO: Improve loading implementation better
    if (isLoading) return <div>Loading</div>;

    return (
        <>
            <Navigation/>
            <PageContainer>
                <Router>
                    <Posts path="/" posts={posts}/>
                    {!user && <Login path="/login" />}
                    {!user && <SignUp path="/register"/>}
                    <NotFound default/>
                </Router>
            </PageContainer>
        </>
    );
}
/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const PageContainer = styled.div`
  max-width: 100%;
  @media (max-width: 700px) {
    padding: 0
  }
`
/*
//--        Reach Router Component renders as a div element             --//
//--    Page Container can be changed with the Router styling purposes  --//
//--            Or pass CSS props directly to the Router               --//
export const PageContainerRouter = styled(Router)`
  max-width: 100%;
  @media (max-width: 700px) {
    padding: 0
  }
`*/

export default App;
