/** @jsxImportSource @emotion/react */
import {CreatePostStoreProvider} from "../../../store/CreatePostStoreProvider";
import CommunitySelector from "./CommunitySelector/CommunitySelector";
import React from "react";
import Fields from "./Fields/Fields";
import TypeSelector from "./TypeSelector/TypeSelector";
import CreatePostSubmit from "./CreatePostSubmit";
import Container from "./Container";

const Create = () => {
    return (
        <CreatePostStoreProvider>
            <CommunitySelector/>
            <Container>
                <TypeSelector/>
                <Fields/>
                <CreatePostSubmit/>
            </Container>
        </CreatePostStoreProvider>
    );
};

export default Create;
