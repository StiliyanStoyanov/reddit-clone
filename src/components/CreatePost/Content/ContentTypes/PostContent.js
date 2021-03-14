/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";

const PostContent = () => {
    const theme = useTheme();
    const postDispatch = usePostDispatch();
    const {postContent} = usePostStore();
    const changeContent = (event) => {
        postDispatch({type: "CHANGE_POST_CONTENT", payload: event.target.value});
    }

    return (
        <textarea css={textarea(theme)} onChange={changeContent} value={postContent} name="postContent" id="postContent" rows="10" placeholder="Text (optional)"/>
    )
}

const textarea = theme => css`
 resize: vertical;
 width: 100%;
 outline: none;
 color: ${theme.color};
 border-color: ${theme.createPost.borderColor};
 border-radius: 4px;
 background-color: ${theme.createPost.backgroundColor};
 min-height: 33px;
 padding: 8px 16px;
 overflow-x: hidden;
 overflow-wrap: break-word;
 &:focus {
    border-color: ${theme.createPost.borderColorOnFocus};
 }
`

export default PostContent