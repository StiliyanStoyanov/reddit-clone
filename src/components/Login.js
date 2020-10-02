/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";
import {useForm} from "react-hook-form";
import {validateEmail} from "../utils/validateEmail";
import {useLogin} from "../hooks/useLogin";

// TODO: restyle form and validation error message display
const Login = () => {
    const {register, handleSubmit, errors} = useForm();
    const [login, {error, buttonDisabled}] = useLogin();

    const onLoginSubmit = (data) => {
        const {email, password} = data
        login(email, password);
    }

    return (
        <LoginForm onSubmit={handleSubmit(onLoginSubmit)}>
            <label css={loginLabel} htmlFor="username">
                Email
                <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="on"
                    ref={register({required: true, minLength: 6, maxLength: 254, validate: validateEmail})}
                />
            </label>
            {error && error?.code === "auth/invalid-email" && <div>Invalid email address</div>}
            {error && error?.code === "auth/user-not-found" && <div>Wrong email address</div>}
            {errors.email && errors.email.type === "validate" && <div>Invalid email address</div>}
            {errors.email && errors.email.type === "required" && <div>Field is required</div>}
            {errors.email && errors.email.type === "minLength" && <div>Min Length is 6</div>}
            {errors.email && errors.email.type === "maxLength" && <div>Max Length is 254</div>}
            <label css={loginLabel} htmlFor="password">
                Password
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    ref={register({required: true, minLength: 6, maxLength: 128})}
                />
            </label>
            {error && error?.code === "auth/wrong-password" && <div>Wrong password</div>}
            {errors.password && errors.password.type === "required" && <div>Field is required</div>}
            {errors.password && errors.password.type === "minLength" && <div>Min Length is 6</div>}
            {errors.password && errors.password.type === "maxLength" && <div>Max Length is 128</div>}

            <button css={loginButton} type="submit" disabled={buttonDisabled}>Login</button>
        </LoginForm>
    );
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
  align-items: center;
`

const loginButton = css`
  margin-top: 10px;
`
export default Login