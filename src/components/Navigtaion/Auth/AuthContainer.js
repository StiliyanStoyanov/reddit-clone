import React from "react";
import styled from "@emotion/styled";
import LoginLink from "./LoginLink";
import SignUpLink from "./SignUpLink";
import {useStore} from "../../../store/StoreProvider";

const AuthContainer = () => {
    const {user} = useStore();
    if (!user) {
        return (
            <Container>
                <LoginLink/>
                <SignUpLink/>
            </Container>
        )
    } else return null

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