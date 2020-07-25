/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";


const Login = () => {


    const LoginHandler = (event) => {
        console.log(event.target);
    }

    return (
        <LoginContainer>
            <label css={loginLabelsCSS} htmlFor="username-login">Username</label>
            <input type="text" id="username-login"/>

            <label css={loginLabelsCSS} htmlFor="password-login">Password</label>
            <input type="password" id="password-login"/>

            <button css={loginButtonCSS} onClick={LoginHandler}>Login</button>
        </LoginContainer>
    )
}





/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const loginLabelsCSS = css`
  
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const loginButtonCSS = css`
  margin-top: 10px;
`


export default Login