/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useCustomRoutes} from "../../hooks/useCustomRoutes";
import {Routes, useMatch} from "react-router";
import UsersProfiles from "../UsersProfiles/UsersProfiles";
import PostListingsWrapper from "./PostsListing/PostListingsWrapper";
import CommentsPage from "./CommentsPage/CommentsPage";
import {PostsStoreProvider} from "../../store/PostsStoreProvider";
import AllPage from "./AllPage/AllPage";
import CommunityPage from "./CommunityPage/CommunityPage";

const excludePath = '/e/:communityId/comments/:postId'
const routes = [
    {path: '/', element: <AllPage/>},
    {path: '/e/:communityId', element: <CommunityPage/>},
    {path: '/user/:username', element: <UsersProfiles/>}
]
export const Posts = () => {
    const postMatch = useMatch('/e/:communityId/comments/:postId');
    const routesMatches = useCustomRoutes(routes, '', excludePath);

    if (!routesMatches && !postMatch) {
        return (
            <div>
                <p css={css`padding: 100px 0; text-align: center; margin: 0;`}>
                    Sorry, there doesn't seem to be anything here.
                </p>
            </div>
        )
    }

    return (
        <PostsStoreProvider>
            {routesMatches}
            <Routes>
                <CommentsPage path="/e/:communityId/comments/:postId"/>
            </Routes>
        </PostsStoreProvider>
    )
};



