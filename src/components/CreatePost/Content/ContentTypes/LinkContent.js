import React from "react";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";

const LinkContent = () => {
    const postDispatch = usePostDispatch();
    const {linkContent} = usePostStore();
    const changeContent = (event) => {
        postDispatch({type: "CHANGE_LINK_CONTENT", payload: event.target.value});
    }

    return (
        <UrlTextArea onChange={changeContent} value={linkContent} name="urlLink" id="urlLink" rows="1" placeholder="Url"/>
    )
}

const UrlTextArea = styled.textarea`
 resize: none;
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

export default LinkContent