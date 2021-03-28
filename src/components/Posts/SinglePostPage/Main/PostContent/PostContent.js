/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import {useLocation, useParams} from "react-router";
import ContentByType from "./ContentByType/ContentByType";
import Info from "./Items/Info";
import BottomBar from "./BottomBar/BottomBar";
import Title from "./Items/Title";
import {useFetchDocument} from "../../../../../hooks/useFetchDocument";
import {useDocumentTitle} from "../../../../../hooks/useDocumentTitle";
import InfoContainer from "../../../shared/Containers/Info";
import LoaderInfo from "../../../../Loaders/InfoLoader";

const PostContent = () => {
    const {state} = useLocation();
    const {communityId, postId} = useParams();
    const path = `communities/${communityId}/posts/${postId}`
    const skipFetch = state && state.communityName
    const firebaseDoc = useFetchDocument(path, skipFetch);

    const {data, isLoading, isError, error} = firebaseDoc
    const docTitle = state?.title || data.title
    const communityName = state?.communityName || data.communityName;
    const communityImageUrl = state?.communityImageUrl || data.communityImageUrl;
    const author = state?.author || data.author;
    const contentType = state?.contentType || data.contentType;
    const content = state?.content || data.content;
    const title = state?.title || data.title;
    useDocumentTitle(docTitle);
    if (isLoading && !skipFetch) {
        return (
            <InfoContainer>
                <LoaderInfo/>
            </InfoContainer>
        )
    }
    if (isError) {
        return <div>{error}</div>
    }
    return (
        <>
            <article css={[article]}>
                <Info author={author} communityName={communityName} communityImageUrl={communityImageUrl}/>
                <Title title={title}/>
                <ContentByType contentType={contentType} content={content}/>
                <BottomBar/>
            </article>
        </>
    );
};

const article = css`
  border-radius: 8px;
  padding-top: 8px;
  label: post-content-wrapper
`

export default PostContent
