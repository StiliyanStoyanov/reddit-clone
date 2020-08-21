/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";

const Login = ({loginAction, user}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }


    if (!user) {
        return (
            <LoginForm>
                <label css={loginLabel}>
                    Username
                    <input
                        type="text"
                        value={email}
                        onChange={emailHandler}
                    />
                </label>

                <label css={loginLabel}>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={passwordHandler}
                    />
                </label>

                <button css={loginButton} onClick={loginAction(email, password)}>Login</button>
                <button css={loginButton}>Test</button>
            </LoginForm>
        );
    } else {
        return null
    }
}


/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const loginLabel = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`

const loginButton = css`
  margin-top: 10px;
`

export default Login