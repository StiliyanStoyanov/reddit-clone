/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import {SignIcon} from "./SignIcon";
import {useStore} from "../../../../store/StoreProvider";
import {useNavigate} from "@reach/router";

const SignUser = () => {
    const {user} = useStore();
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/register');
    }

    if (!user) {
        return (
            <SignUserContainer onClick={redirect}>
                <SignIcon/>
                <SignUserText>Sign Up / Sign In</SignUserText>
            </SignUserContainer>
        );
    } else {
        return null;
    }

}
/* STYLED COMPONENTS || STYLES USED IN THIS FILE BELOW */
const SignUserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px;
  cursor:pointer;
  user-select: none; 
  &:hover {
    background-color: ${ ({theme}) => theme.dropdownHoverColor }
  }
`
const SignUserText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default SignUser