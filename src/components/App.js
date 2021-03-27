/** @jsxImportSource @emotion/react */
import React from 'react';
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
import UserNav from "./User/UserNav";
import {Routes} from "react-router";

const App = () => {
    useSessionLogin();
    const {isLoading} = useUserStore();
    // TODO: Improve loading implementation
    if (isLoading) return <div>Loading</div>;
    return (
        <>
            <Navigation/>
            <div css={container}>
                <Routes>
                    <Posts path="/*"/>
                    <CreateCommunity path="/create-community"/>
                    <CreatePost path="/create-post"/>
                    <UserSettings path="/settings/*"/>
                    <UserNav path="/user/*"/>
                    <Login path="/login"/>
                    <SignUp path="/register"/>
                    <NotFound path="*"/>
                </Routes>
                <ToastContainer
                    autoClose={4000}
                    position="top-center"
                    draggablePercent={60}
                    pauseOnHover={false}
                />
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
