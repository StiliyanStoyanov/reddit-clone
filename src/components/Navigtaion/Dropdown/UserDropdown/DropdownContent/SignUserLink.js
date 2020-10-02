/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import {useStore} from "../../../../../store/StoreProvider";
import {useNavigate} from "@reach/router";
import ContentIcon from "../../shared/ContentIcons";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import DropdownItemsContainer from "../../shared/DropdownItemsContainer";

const SignUserLink = () => {
    const {user} = useStore();
    const navigate = useNavigate();
    const redirect = () => navigate('/register');

    if (!user) {
        return (
            <DropdownItemsContainer onClick={redirect}>
                <ContentIcon icon={faSignInAlt}/>
                <SignUserText>Sign Up / Sign In</SignUserText>
            </DropdownItemsContainer>
        );
    } else {
        return null;
    }

}
/* STYLED COMPONENTS || STYLES USED IN THIS FILE BELOW */
const SignUserText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default SignUserLink