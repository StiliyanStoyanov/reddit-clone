import React from "react";
import DropdownItemsContainer from "../../shared/DropdownItemsContainer";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import ContentIcon from "../../shared/ContentIcons";
import styled from "@emotion/styled";
import {useNavigate} from "@reach/router";

const CreatePostLink = () => {
    const navigate = useNavigate();
    return (
        <DropdownItemsContainer onClick={() => navigate('/create')}>
            <ContentIcon icon={faEdit}/>
            <Text>Create Post</Text>
        </DropdownItemsContainer>
    );
}

const Text = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`


export default CreatePostLink