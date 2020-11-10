import React from "react";
import styled from "@emotion/styled";
import LoginLink from "./LoginLink";
import SignUpLink from "./SignUpLink";
import {useUserStore} from "../../../store/UserStoreProvider";

const AuthContainer = () => {
    const {user} = useUserStore();
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
  margin-right: 5px;
  white-space: nowrap;
`

export default AuthContainer