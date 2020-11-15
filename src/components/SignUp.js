/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";
import {useForm} from "react-hook-form";
import {validateEmail} from "../utils/validateEmail";
import {validateUsername} from "../utils/validateUsername";
import {useSignUp} from "../hooks/useSignUp";
import {useUserStore} from "../store/UserStoreProvider";

const SignUp = () => {
    const {user} = useUserStore();
    const {register, handleSubmit, errors} = useForm();
    const [signUp, {error, buttonDisabled}] = useSignUp();
    const onSignUpSubmit = data => signUp(data);

    if (user) {
        return null
    }
    return (
        <SignUpForm onSubmit={handleSubmit(onSignUpSubmit)}>
            <label css={signUpLabelCss} htmlFor="username">
                Username
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="on"
                    ref={register({required: true, minLength: 3, maxLength: 24, validate: validateUsername})}
                />
            </label>
            {error && error?.code === "auth/username-already-exists" && <div>Username Already Exists</div>}
            {errors.username && errors.username.type === "validate" && <div>Invalid username</div>}
            {errors.username && errors.username.type === "required" && <div>Field is required</div>}
            {errors.username && errors.username.type === "minLength" && <div>Min Length is 3</div>}
            {errors.username && errors.username.type === "maxLength" && <div>Max Length is 24</div>}
            <label css={signUpLabelCss} htmlFor="email">
                Email
                <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="on"
                    ref={register({required: true, minLength: 6, maxLength: 254, validate: validateEmail})}
                />
            </label>
            {error && error?.code === "auth/email-already-exists" && <div>Email already exists</div>}
            {errors.email && errors.email.type === "validate" && <div>Invalid email address</div>}
            {errors.email && errors.email.type === "required" && <div>Field is required</div>}
            {errors.email && errors.email.type === "minLength" && <div>Min Length is 6</div>}
            {errors.email && errors.email.type === "maxLength" && <div>Max Length is 254</div>}
            <label css={signUpLabelCss} htmlFor="password">
                Password
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    ref={register({required: true, minLength: 6, maxLength:128})}
                />
            </label>
            {errors.password && errors.password.type === "required" && <div>Field is required</div>}
            {errors.password && errors.password.type === "minLength" && <div>Min Length is 6</div>}
            {errors.password && errors.password.type === "maxLength" && <div>Max Length is 128</div>}
            <button css={signUpButtonCss} type="submit" disabled={buttonDisabled}>Sign Up</button>
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