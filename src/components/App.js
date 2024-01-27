/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import Navigation from "./Navigtaion/Navigation";
import {Posts} from "./Posts/Posts";
import CreatePost from "./CreatePost/CreatePost";
import CreateCommunity from "./CreateCommunity/CreateCommunity";
import UserSettings from "./UserSettings/UserSettings";
import AuthModal from "./shared/AuthModal/AuthModal";
import {Routes} from "react-router";
import {SubscriptionsStoreProvider} from "../store/SubscriptionsStoreProvider";
import {ScoresStoreProvider} from "../store/ScoresStoreProvider";
import {CommunityStoreProvider} from "../store/CommunityStore/CommunityStoreProvider";
import Leaderboards from "./Leaderboards/Leaderboards";
import {StyledToastContainer} from "./shared/StyledToastContainer";

const App = () => {
    return (
        <>
            <CommunityStoreProvider>
                <SubscriptionsStoreProvider>
                    <ScoresStoreProvider>
                        <div css={container}>
                            <Navigation/>
                            <Routes>
                                <Posts path="/*"/>
                                <CreateCommunity path="/community/create"/>
                                <CreatePost path="/submit"/>
                                <UserSettings path="/settings/*"/>
                                <Leaderboards path="/leaderboards/*"/>
                            </Routes>
                            <AuthModal/>
                            <StyledToastContainer/>
                        </div>
                    </ScoresStoreProvider>
                </SubscriptionsStoreProvider>
            </CommunityStoreProvider>
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
