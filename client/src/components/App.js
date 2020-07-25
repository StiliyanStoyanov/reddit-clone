/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import {Global, jsx} from "@emotion/core";
import Navigation from "./Navigtaion/Navigation";
import {globalStyles} from "../styles";
import {Posts} from "./Posts/Posts";
import styled from "@emotion/styled";
import Login from "./Login";
import Register from "./Register";

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey)
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    })

    return [value, setValue];
};

const App = () => {
    const [posts, setPosts] = useState([]);
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {

    })

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:5001/echo-blue/europe-west3/app/test');
    //         const data = await response.json();
    //         console.log(data);
    //     }
    //     fetchData()
    //         .then(() => console.log('Fetch Successful'))
    //         .catch(err => console.log("Something went wrong " + err));
    // }, []);

    return (
        <>
            <Global styles={globalStyles}/>
            <Navigation isAuth={false}/>
            <PageContainer>
                <Router>
                    <Posts path="/" posts={posts}/>
                    {isAuth === false && <Login path="/login"/>}
                    {isAuth === false && <Register path="register"/>}
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
