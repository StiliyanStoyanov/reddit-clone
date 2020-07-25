/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";

const Register = () => {



    const RegisterHandler = (event) => {
        console.log(event.target);
    }

    return (
        <RegisterContainer>
            <label css={registerLabelsCSS} htmlFor="username-register">Username</label>
            <input type="text" id="username-register"/>

            <label css={registerLabelsCSS} htmlFor="password-register">Password</label>
            <input type="password" id="password-register"/>

            <button css={registerButtonCSS} onClick={RegisterHandler}>Register</button>
        </RegisterContainer>
    );
}





/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const registerLabelsCSS = css`
  
`
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const registerButtonCSS = css`
  margin-top: 10px;
`


export default Register