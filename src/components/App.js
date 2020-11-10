/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {Redirect, Router} from "@reach/router";
import styled from "@emotion/styled";
import Navigation from "./Navigtaion/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import {Posts} from "./Posts/Posts";
import {NotFound} from "./NotFound";
import {useUserDispatch, useUserStore} from "../store/UserStoreProvider";
import {useSessionLogin} from "../hooks/useSessionLogin";
import CreatePost from "./CreatePost/CreatePost";
import CreateCommunity from "./CreateCommunity/CreateCommunity";
import Test from "./Test";

const App = () => {
    useSessionLogin();
    const {user, isLoading} = useUserStore();

    // TODO: Improve loading implementation
    if (isLoading) return <div>Loading</div>;
    return (
        <>
            <Navigation/>
            <PageContainer>
                <Router>
                    <Posts path="/"/>
                    {!user ? <Redirect from="/create-community" to="/login" noThrow/> : <CreateCommunity path="/create-community"/>}
                    {!user ? <Redirect from="/create-post" to="/login" noThrow/> : <CreatePost path="/create-post"/>}
                    {!user && <Login path="/login" />}
                    {!user && <SignUp path="/register"/>}
                    <NotFound default/>
                </Router>
                <Test/>
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

export default App;
