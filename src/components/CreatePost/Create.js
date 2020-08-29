/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {useForm} from "react-hook-form";
import CommunitySelector from "./CommunitySelector";

// TODO: Add Rich Text Editor
const Create = () => {
    const {register, handleSubmit, errors} = useForm();



    const onCreatePostSubmit = () => {}
    return (
        <CreatePostContainer>
            <CreatePostHeader>Create Post</CreatePostHeader>
            <CommunitySelector/>
            <CreatePostForm onSubmit={handleSubmit(onCreatePostSubmit)}>

            </CreatePostForm>
        </CreatePostContainer>
    );
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: black;
`
const CreatePostContainer = styled.div`
  min-height: 500px;
  min-width: 380px;
  max-width: 740px;
  padding: 20px;
  margin: 0 auto;
`
const CreatePostHeader = styled.div`
  padding: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin: 16px 0;
  border-bottom: 1px solid
`

export default Create