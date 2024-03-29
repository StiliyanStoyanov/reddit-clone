/** @jsxImportSource @emotion/react */
import PostContent from "./PostContent";
import ImageContent from "./ImageContent";
import LinkContent from "../../../../shared/Items/Content/LinkContent";

const ContentByType = ({contentType, content}) => {
    switch (contentType) {
        case 'post': return <PostContent content={content}/>
        case 'image': return <ImageContent content={content}/>
        case 'link': return <LinkContent content={content}/>
        default: return null;
    }
};
export default ContentByType;
