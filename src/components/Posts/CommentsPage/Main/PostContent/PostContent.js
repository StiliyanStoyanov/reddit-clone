/** @jsxImportSource @emotion/react */
import ContentByType from "./ContentByType/ContentByType";
import Info from "./Items/Info";
import BottomBar from "./BottomBar/BottomBar";
import Title from "./Items/Title";
import {useDocumentTitle} from "../../../../../hooks/useDocumentTitle";


const PostContent = ({post}) => {
    const {
        communityName, communityImageUrl, author, createdAt,
        contentType, content, title, scores, commentsCount
    } = post
    useDocumentTitle(title);
    return (
        <article>
            <Info
                author={author}
                communityName={communityName}
                communityImageUrl={communityImageUrl}
                createdAt={createdAt}
            />
            <Title title={title}/>
            <ContentByType contentType={contentType} content={content}/>
            <BottomBar scores={scores} commentsCount={commentsCount}/>
        </article>
    );
};

export default PostContent
