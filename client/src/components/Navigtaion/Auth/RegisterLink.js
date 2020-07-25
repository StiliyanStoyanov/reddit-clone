/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";
import {css, jsx} from "@emotion/core";


const RegisterLink = () => {


    return (
        <RegisterContainer>
            <Link css={RegisterLinkCSS} to="register">
                Register
            </Link>
        </RegisterContainer>
    )
}





/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const RegisterLinkCSS = css`
  margin-right: 10px;
`
const RegisterContainer = styled.div`
  
`



export default RegisterLink