/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";
import {useForm} from "react-hook-form";
import {useAuth, useAuthTypes} from "../hooks/useAuth";
import {validateEmail} from "../utils/validateEmail";

const {signUpUser} = useAuthTypes

const SignUp = () => {
    const {register, handleSubmit, errors} = useForm();
    const [signUp, { error, buttonState}] = useAuth(signUpUser);
    const onSignUpSubmit = ({email, password}) => {
        signUp(email, password)
    }

    return (
        <SignUpForm onSubmit={handleSubmit(onSignUpSubmit)}>
            <label css={signUpLabelCss} htmlFor="email">
                Email
                <input
                    id="email"
                    name="email"
                    type="text"
                    ref={register({required: true, minLength: 6, maxLength: 254, validate: validateEmail})}
                />
            </label>
            {error && error?.code === "auth/email-already-in-use" && <div>Email already exists</div>}
            {error && error?.code === "auth/invalid-email" && <div>Invalid email address</div>}
            {errors.email && errors.email.type === "required" && <div>Field is required</div>}
            {errors.email && errors.email.type === "minLength" && <div>Min Length is 6</div>}
            {errors.email && errors.email.type === "maxLength" && <div>Max Length is 254</div>}

            <label css={signUpLabelCss} htmlFor="password">
                Password
                <input
                    id="password"
                    name="password"
                    type="password"
                    ref={register({required: true, minLength: 6, maxLength:128})}
                />
            </label>
            {errors.password && errors.password.type === "required" && <div>Field is required</div>}
            {errors.password && errors.password.type === "minLength" && <div>Min Length is 6</div>}
            {errors.password && errors.password.type === "maxLength" && <div>Max Length is 128</div>}

            <button css={signUpButtonCss} type="submit" disabled={buttonState}>Sign Up</button>
        </SignUpForm>
    );
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const signUpLabelCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const signUpButtonCss = css`
  margin-top: 10px;
`


export default SignUp