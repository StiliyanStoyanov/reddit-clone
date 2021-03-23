import React from "react";
import ViewsWrapper from "../Views/ViewsWrapper";
import CardViewLoader from "../../Loaders/CardViewLoader";

const PostsListing = ({view, sort, ...otherProps}) => {
    const {data, isLoading, isFetching, isLastIndex, communityNotFound, updateQuery} = otherProps;
    if (isLoading) {
        return (
            <div>
                <CardViewLoader/>
                <CardViewLoader/>
            </div>
        )
    }

    return (
        <div id="posts-listing-container">
            <ViewsWrapper data={data} view={view}/>
            {isFetching && <CardViewLoader/>}
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
