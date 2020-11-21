/* eslint-disable no-unused-vars */
import React from 'react';
import {Router} from "@reach/router";
import styled from "@emotion/styled";
import Navigation from "./Navigtaion/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import {Posts} from "./Posts/Posts";
import {NotFound} from "./NotFound";
import {useUserStore} from "../store/UserStoreProvider";
import {useSessionLogin} from "../hooks/useSessionLogin";
import CreatePost from "./CreatePost/CreatePost";
import CreateCommunity from "./CreateCommunity/CreateCommunity";
import UserSettings from "./UserSettings/UserSettings";

const App = () => {
    useSessionLogin();
    const {isLoading} = useUserStore();
    // TODO: Improve loading implementation
    if (isLoading) return <div>Loading</div>;
    return (
        <>
            <Navigation/>
            <PageContainer>
                <Router>
                    <Posts path="/"/>
                    <CreateCommunity path="/create-community"/>
                    <CreatePost path="/create-post"/>
                    <UserSettings path="/settings/*"/>
                    <Login path="/login" />
                    <SignUp path="/register"/>
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

export default App;
