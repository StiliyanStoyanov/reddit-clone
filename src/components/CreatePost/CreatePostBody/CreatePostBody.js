/* eslint-disable no-unused-vars */
import React from "react";
import {PostStoreProvider} from "../../../store/PostStoreProvider";
import CommunitySelector from "./CommunitySelector/CommunitySelector";
import ContentTypeSelector from "./ContentTypeSelector/ContentTypeSelector";
import Forms from "./Forms/Forms";
import styled from "@emotion/styled";

const CreatePostBody = () => {
    return (
        <PostStoreProvider>
            <CommunitySelector/>
            <PostBody>
                <ContentTypeSelector/>
                <Forms/>
            </PostBody>
        </PostStoreProvider>
    )
}

const PostBody = styled.div`
 background-color: ${({theme}) => theme.navBackgroundColor};
 border-radius: 4px;
 overflow: auto;
`

export default CreatePostBody