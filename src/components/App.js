/* eslint-disable no-unused-vars */
import React from 'react';
import {Router} from "@reach/router";
import styled from "@emotion/styled";
import Navigation from "./Navigtaion/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import {Posts} from "./Posts/Posts";
import {NotFound} from "./NotFound";
import {useStore} from "../store/StoreProvider";
import {useSessionLogin} from "../hooks/useSessionLogin";
import Create from "./CreatePost/Create";

const App = () => {
    const {user} = useStore();
    const isLoading = useSessionLogin();

    // TODO: Improve loading implementation
    if (isLoading) return <div>Loading</div>;
    return (
        <>
            <Navigation/>
            <PageContainer>
                <Router>
                    <Posts path="/"/>
                    <Create path="/create"/>
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

export default App;
