/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import Navigation from "./Navigtaion/Navigation";
import {Posts} from "./Posts/Posts";
import CreatePost from "./CreatePost/CreatePost";
import CreateCommunity from "./CreateCommunity/CreateCommunity";
import UserSettings from "./UserSettings/UserSettings";
import {Routes} from "react-router";
import TestButtonsBar from "../testing/TestButtonsBar";
import AuthModal from "./shared/AuthModal/AuthModal";
import Listeners from "./Listeners/Listeners";
import {SubscriptionsStoreProvider} from "../store/SubscriptionsStoreProvider";
import {ScoresStoreProvider} from "../store/ScoresStoreProvider";

const App = () => {
    return (
        <>
            <SubscriptionsStoreProvider>
                <ScoresStoreProvider>
                    <div css={container}>
                        <Navigation/>
                        <TestButtonsBar/>
                        <Routes>
                            <Posts path="/*"/>
                            <CreateCommunity path="/create-community"/>
                            <CreatePost path="/create-post"/>
                            <UserSettings path="/settings/*"/>
                        </Routes>
                        <AuthModal/>
                    </div>
                    <Listeners/>
                </ScoresStoreProvider>
            </SubscriptionsStoreProvider>
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
