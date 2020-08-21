/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";

const SignUp = ({registerHandler, user}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const usernameHandler = (event) => {

    }
    const passwordHandler = (event) => {

    }


    if (!user) {
        return (
            <SignUpContainer>
                <label css={signUpLabelCss}>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={usernameHandler}
                    />
                </label>

                <label css={signUpLabelCss}>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={passwordHandler}/>
                </label>

                <button css={signUpButtonCss} onClick={registerHandler}>Register</button>
            </SignUpContainer>
        );
    } else {
        return null;
    }
}





/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const signUpLabelCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const signUpButtonCss = css`
  margin-top: 10px;
`


export default SignUp