import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";

const SignUpLink = () => {
    return (
        <SignUpContainer>
            <SignUpLinkStyled to="register">
                SIGN UP
            </SignUpLinkStyled>
        </SignUpContainer>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const SignUpContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  background-color: white;
  border-radius: 8px;
  border: 1px solid white;
  color: black;
`
const SignUpLinkStyled= styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  color: ${ ({theme}) => theme.theme === 'dark' ? theme.bodyBackgroundColor : theme.color}
`

export default SignUpLink