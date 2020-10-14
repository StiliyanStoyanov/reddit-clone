import React from "react";
import DropdownItemsContainer from "../../shared/DropdownItemsContainer";
import ContentIcon from "../../shared/ContentIcons";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import styled from "@emotion/styled";
import {useNavigate} from "@reach/router";


const CreateCommunityLink = ({showHideContent}) => {
    const navigate = useNavigate();
    return (
        <DropdownItemsContainer onClick={() => {
            navigate('/create-community')
            showHideContent()
        }}>
            <ContentIcon icon={faUsers}/>
            <Text>Create Community</Text>
        </DropdownItemsContainer>
    )
}
const Text = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default CreateCommunityLink