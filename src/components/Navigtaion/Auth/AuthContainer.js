import React from "react";
import styled from "@emotion/styled";
import LoginLink from "./LoginLink";
import SignUpLink from "./SignUpLink";

const AuthContainer = () => {
    return (
        <Container>
            <LoginLink/>
            <SignUpLink/>
        </Container>
    )
}


/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  white-space: nowrap;
`

export default AuthContainer