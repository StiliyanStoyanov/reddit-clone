import React from "react";
import {PostStoreProvider} from "../../store/PostStoreProvider";
import CommunitySelector from "./CommunitySelector/CommunitySelector";
import ContentTypeSelector from "./ContentTypeSelector/ContentTypeSelector";
import ContentFields from "./Content/ContentFields";
import styled from "@emotion/styled";

const CreatePostBody = () => {
    return (
        <PostStoreProvider>
            <CommunitySelector/>
            <ContentBody>
                <ContentTypeSelector/>
                <ContentFields/>
            </ContentBody>
        </PostStoreProvider>
    )
}

const ContentBody = styled.div`
 background-color: ${({theme}) => theme.createPost.backgroundColor};
 border-radius: 4px;
 overflow: auto;
`

export default CreatePostBody