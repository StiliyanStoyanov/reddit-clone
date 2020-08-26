import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";

const LoginLink = () => {
    return (
        <LoginLinkContainer>
            <LoginLinkStyled to="login">
                LOG IN
            </LoginLinkStyled>
        </LoginLinkContainer>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const LoginLinkContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  margin-right: 5px;
  border-radius: 8px;
`

const LoginLinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  color: ${ ({theme}) => theme.color }
`

export default LoginLink