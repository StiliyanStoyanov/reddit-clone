/** @jsxImportSource @emotion/react */
import {PostStoreProvider} from "../../../store/PostStoreProvider";
import CommunitySelector from "./CommunitySelector/CommunitySelector";
import React from "react";
import Fields from "./Fields/Fields";
import TypeSelector from "./TypeSelector/TypeSelector";
import CreatePostButton from "./CreatePostButton";
import Container from "./Container";

const Create = () => {
    return (
        <PostStoreProvider>
            <CommunitySelector/>
            <Container>
                <TypeSelector/>
                <Fields/>
                <CreatePostButton/>
            </Container>
        </PostStoreProvider>
    );
};

export default Create;
