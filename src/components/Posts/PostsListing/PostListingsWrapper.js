/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import ViewSelector from "../ViewSelector/ViewSelector";
import PostsListing from "./PostListing";
import {useFetchPosts} from "../../../hooks/usePostsFetch/useFetchPosts";
import {useBaseLocation} from "../../../hooks/useBaseLocation";
import CommunityBar from "../CommunityBar/CommunityBar";

const PostListingsWrapper = (props) => {
    const {view, setView, sort, setSort} = props
    const [baseLocation, communityId] = useBaseLocation();
    const postsStatus = useFetchPosts(sort, baseLocation, communityId);
    const {
        data,
        startAfterIndex,
        isLoading,
        isFetching,
        isError,
        isLastIndex,
        communityNotFound,
        community,
        query,
        updateQuery
    } = postsStatus

    if (!baseLocation) {
        return null;
    }
    if (communityNotFound) {
        return <div>Community does not exist</div>;
    }
    return (
        <>
            {community && <CommunityBar community={community}/>}
            <div css={container}>
                <ViewSelector
                    view={view}
                    setView={setView}
                    sort={sort}
                    setSort={setSort}
                />
                <PostsListing view={view} sort={sort} {...postsStatus}/>
            </div>
        </>

    );
};

const container = css`
  max-width: 700px;
  min-width: 380px;
  margin: 0 auto;
`

export default PostListingsWrapper;
