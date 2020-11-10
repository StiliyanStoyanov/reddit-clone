import React from "react";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";


const PostContent = () => {
    const postDispatch = usePostDispatch();
    const {postContent} = usePostStore();
    const changeContent = (event) => {
        postDispatch({type: "CHANGE_POST_CONTENT", payload: event.target.value});
    }

    return (
        <PostContentTextArea onChange={changeContent} value={postContent} name="postContent" id="postContent" rows="10" placeholder="Text (optional)"/>
    )
}

const PostContentTextArea = styled.textarea`
 resize: vertical;
 width: 100%;
 outline: none;
 color: ${({theme}) => theme.color};
 border-color: ${({theme}) => theme.createPost.borderColor};
 border-radius: 4px;
 background-color: ${({theme}) => theme.createPost.backgroundColor};
 min-height: 33px;
 padding: 8px 16px;
 overflow-x: hidden;
 overflow-wrap: break-word;
 &:focus {
    border-color: ${({theme}) => theme.createPost.borderColorOnFocus};
 }
`

export default PostContent