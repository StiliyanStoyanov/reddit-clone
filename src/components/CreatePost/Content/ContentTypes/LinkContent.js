/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";

const LinkContent = () => {
    const theme = useTheme();
    const postDispatch = usePostDispatch();
    const {linkContent} = usePostStore();
    const changeContent = (event) => {
        postDispatch({type: "CHANGE_LINK_CONTENT", payload: event.target.value});
    }

    return (
        <textarea css={textarea(theme)} onChange={changeContent} value={linkContent} name="urlLink" id="urlLink" rows="1" placeholder="Url"/>
    )
}

const textarea = theme => css`
 resize: none;
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

export default LinkContent