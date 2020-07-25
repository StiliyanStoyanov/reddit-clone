import React from "react";
import styled from "@emotion/styled";
import LoginLink from "./LoginLink";
import RegisterLink from "./RegisterLink";
import DropdownMenu from "../Dropdown/Dropdown";


const AuthContainer = () => {


    return (
        <Container>
            <LoginLink/>
            <RegisterLink/>
            <DropdownMenu panel={'anonymous'}/>
        </Container>
    )
}


/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default AuthContainer