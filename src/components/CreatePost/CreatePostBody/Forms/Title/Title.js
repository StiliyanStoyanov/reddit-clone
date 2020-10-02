import React, {useRef} from "react";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";

const Title = () => {
    const titleRef = useRef(null);
    const {title} = usePostStore();
    const postDispatch = usePostDispatch();

    // TODO: Maybe improve?
    const changeTitle = () => postDispatch({type: "CHANGE_TITLE", payload: titleRef.current.value});

    return (
        <TitleContainer>
            <TitleTextArea ref={titleRef} onChange={changeTitle} value={title} name="title" id="title" placeholder="Title" spellcheck={false}/>
        </TitleContainer>
    );
}


const TitleContainer = styled.div`

`
const TitleTextArea = styled.textarea`
 resize: none;
 width: 100%;
 border-color: #343536;
 border-radius: 4px;
 color: ${({theme}) => theme.color};
 background-color: ${({theme}) => theme.navBackgroundColor};
 height: 33px;
 padding: 8px 68px 8px 16px;
 overflow-y: hidden;
 overflow-wrap: break-word;
 white-space: pre-wrap;
`

export default Title