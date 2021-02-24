import React from "react";
import PostContent from "./PostContent";
import ImageContent from "./ImageContent";
import LinkContent from "./LinkContent";

const Content = ({content, contentType}) => {
    return (
        <>
            {contentType === 'post' && <PostContent content={content}/>}
            {contentType === 'image' && <ImageContent content={content}/>}
            {contentType === 'link' && <LinkContent content={content}/>}
        </>
    );
};

export default Content;
