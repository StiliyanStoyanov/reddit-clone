/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, {useEffect, useState} from "react";
import firebase from "../../../firebase"
import styled from "@emotion/styled";
import Title from "./Title/Title";
import ImageContent from "./ContentTypes/ImageContent";
import PostContent from "./ContentTypes/PostContent";
import LinkContent from "./ContentTypes/LinkContent";
import {useUserStore} from "../../../store/UserStoreProvider";
import {css, jsx} from "@emotion/core";
import {usePostStore} from "../../../store/PostStoreProvider";
import {selectSubmitContent} from "../../../utils/formHelpers";
import {validateForm} from "../../../utils/formHelpers";

const ContentFields = () => {
    const [allowSubmit, setAllowSubmit] = useState(false);
    const {subscriptionsData, username} = useUserStore();
    const postStore = usePostStore();
    const {selectedCommunity, title, selectedFormType} = postStore

    useEffect(() => {
        //TODO: Think of a way to prevent the extra run of the validateForm function when allowSubmit state changes
        const validatedFormState = validateForm(postStore);
        if (validatedFormState !== allowSubmit) setAllowSubmit(validatedFormState);
    }, [postStore, allowSubmit, subscriptionsData]);
    const submitPost = () => {
        if (!allowSubmit) return false;
        const communityCollection = firebase.firestore().collection('communities');
        const createTimestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            creator: username,
            upvotes: 0,
            title: title,
            content: selectSubmitContent(postStore),
            createdAt: createTimestamp,
            contentType: selectedFormType,
            communityName: postStore.selectedCommunity.name,
            communityImageUrl: postStore.selectedCommunity.imageUrl
        };
        if (selectedFormType === 'post' || selectedFormType === 'link') {
            communityCollection
                .doc(selectedCommunity.name)
                .collection('posts')
                .add(data)
                .catch(err => console.error(err));
        } else if (selectedFormType === 'image') {
            //TODO: Implement cloud storage
            communityCollection
                .doc(selectedCommunity)
                .collection('posts')
                .add(data)
                .catch(err => console.error(err));
        }
    };
    return (
        <FieldsContainer>
            <Title/>
            {selectedFormType === 'post' && <PostContent/>}
            {selectedFormType === 'image' && <ImageContent/>}
            {selectedFormType === 'link' && <LinkContent/>}
            <button onClick={submitPost} disabled={!allowSubmit} css={submitButtonCSS}>Create</button>
        </FieldsContainer>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const FieldsContainer = styled.div`
  padding: 20px;
`
const submitButtonCSS = css`
 display: block;
 margin: 10px auto 0;
 width: 15%;
 height: 40px
`

export default ContentFields