import React from "react";
import styled from "@emotion/styled";
import CreatePostBody from "./CreatePostBody";

// TODO: Add Rich Text Editor
const CreatePost = () => {
    return (
        <CreatePostContainer>
            <CreatePostHeader>Create Post</CreatePostHeader>
            <CreatePostBody/>
        </CreatePostContainer>
    );
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const CreatePostContainer = styled.div`
  min-height: 500px;
  min-width: 380px;
  max-width: 740px;
  padding: 0 8px;
  margin: 0 auto;
`
const CreatePostHeader = styled.div`
  padding: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin: 16px 0;
  border-bottom: 1px solid;
`

export default CreatePost