import React from "react";
import styled from "@emotion/styled";
import CreatePostHeader from "./CreatePostHeader/CreatePostHeader";
import CreatePostBody from "./CreatePostBody/CreatePostBody";

// TODO: Add Rich Text Editor
const CreatePost = () => {
    return (
        <CreatePostContainer>
            <CreatePostHeader/>
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

export default CreatePost