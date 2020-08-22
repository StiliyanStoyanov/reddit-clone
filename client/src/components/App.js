/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Router, useNavigate} from "@reach/router";
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";
import Navigation from "./Navigtaion/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import {Posts} from "./Posts/Posts";
import {NotFound} from "./NotFound";
import Test from "./Test";
import userService from "../services/user-service";

const {
    login,
    register,
    sessionLogin
} = userService

const App = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginAction = (email, password) => (event) => {

    };
    const signUpAction = (event) => {};
    const logoutAction = (event) => {};

    // TODO: Improve loading implementation better
    if (loading) {
        return (
            <Test/>
        );

    } else {
        return (
            <>
                <Navigation logoutAction={logoutAction} user={user}/>
                <PageContainer>
                    <Router>
                        <Posts path="/" posts={posts}/>
                        <Login path="/login" loginAction={loginAction}/>
                        <SignUp path="/register" registerHandler={signUpAction}/>
                        <NotFound default/>
                    </Router>
                </PageContainer>
            </>
        );
    }
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
