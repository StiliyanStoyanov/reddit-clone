/** @jsx jsx */
import React from "react";
import {usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Title = () => {
    const theme = useTheme();
    const {title} = usePostStore();
    const postDispatch = usePostDispatch();
    const changeTitle = (event) => {
        postDispatch({type: "CHANGE_TITLE", payload: event.target.value});
    }
    const titleTextAreaStyle = css`
      resize: none;
      width: 100%;
      border-color: #343536;
      border-radius: 4px;
      color: ${theme.color};
      background-color: ${theme.navBackgroundColor};
      height: 33px;
      padding: 8px 68px 8px 16px;
      overflow-y: hidden;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    `
    return (
        <div>
            <textarea css={titleTextAreaStyle} onChange={changeTitle} value={title} name="title" id="title" placeholder="Title" spellCheck={false}/>
        </div>
    );
}

export default Title