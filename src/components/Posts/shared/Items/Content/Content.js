/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import PostContent from "./PostContent";
import LinkContent from "./LinkContent";
import ImageContent from "./ImageContent";

const Content = ({content, contentType}) => {
    switch (contentType) {
        case 'post': return <PostContent content={content}/>
        case 'image': return <ImageContent src={content}/>
        case 'link': return <LinkContent  content={content} css={link_container}/>
        default: return null;
    }
};

const link_container = css`
  font-size: 14px;
  padding: 4px 8px;
`;

export default Content;
