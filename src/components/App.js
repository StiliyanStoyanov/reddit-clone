/** @jsxImportSource @emotion/react */
import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import {Router} from "@reach/router";
import {css} from "@emotion/react";
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
import {ToastContainer} from "react-toastify";
import {Test} from "../testing/Test";
import UserNav from "./User/UserNav";
import BlankComponent from "../testing/BlankComponent";

const App = () => {
    useSessionLogin();
    const {isLoading} = useUserStore();
    // TODO: Improve loading implementation
    if (isLoading) return <div>Loading</div>;
    return (
        <>
            <Navigation/>
            <div css={container}>
                <Router id="page-container">
                    <BlankComponent path="/loader"/>
                    <Posts path="/*"/>
                    <UserNav path="/user/*"/>
                    <CreateCommunity path="/create-community"/>
                    <CreatePost path="/create-post"/>
                    <UserSettings path="/settings/*"/>
                    <Login path="/login" />
                    <SignUp path="/register"/>
                    <NotFound default/>
                </Router>
                <ToastContainer
                    autoClose={4000}
                    position="top-center"
                    draggablePercent={60}
                    pauseOnHover={false}
                />
                <Test/>
            </div>
        </>
    );
}
const container = css`
  max-width: 100%;
  @media (max-width: 700px) {
    padding: 0
  }
`

export default App;
