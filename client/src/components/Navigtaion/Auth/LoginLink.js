/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";
import {css, jsx} from "@emotion/core";


const LoginLink = () => {
    return (
        <LoginContainer>
            <Link css={LoginLinkCSS} to="login">
                Login
            </Link>
        </LoginContainer>
    )
}



/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const LoginLinkCSS = css`
  margin-right: 10px;
`

const LoginContainer = styled.div`
`

export default LoginLink