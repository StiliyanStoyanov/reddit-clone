import React from "react";
import ViewsWrapper from "../Views/ViewsWrapper";
import PostLoader from "../../Loaders/PostLoader";

const PostsListing = ({view, sort, ...postsDataAndStatus}) => {
    const {data, isLoading, isFetching, isLastIndex, communityNotFound, updateQuery} = postsDataAndStatus;
    if (isLoading) {
        return (
            <div>
                <PostLoader/>
                <PostLoader/>
            </div>
        )
    }

    return (
        <div id="posts-listing-container">
            <ViewsWrapper data={data} view={view}/>
            {isFetching && <PostLoader/>}
            <button
                onClick={updateQuery}
                disabled={isFetching || communityNotFound || isLastIndex}
            >
                Load More...
            </button>
        </div>
    );
};

export default PostsListing;
