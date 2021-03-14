/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import {PostStoreProvider} from "../../store/PostStoreProvider";
import CommunitySelector from "./CommunitySelector/CommunitySelector";
import ContentTypeSelector from "./ContentTypeSelector/ContentTypeSelector";
import ContentFields from "./Content/ContentFields";

const CreatePostBody = () => {
    const theme = useTheme();
    return (
        <PostStoreProvider>
            <CommunitySelector/>
            <div css={contentBody(theme)}>
                <ContentTypeSelector/>
                <ContentFields/>
            </div>
        </PostStoreProvider>
    )
}

const contentBody = theme => css`
 background-color: ${theme.createPost.backgroundColor};
 border-radius: 4px;
 overflow: auto;
`

export default CreatePostBody