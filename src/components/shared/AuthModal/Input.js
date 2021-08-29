/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({register, rules, error, autoComplete, name, type,  labelText}) => {
    return (
        <div css={[container]}>
            <label htmlFor={name} css={[label]}>
                {labelText}
            </label>
            <input
                css={[input]}
                {...register(name, rules)}
                type={type}
                id={name}
                autoComplete={autoComplete}
            />
            <ErrorMessage error={error}/>
        </div>
    );
};

const container = css`
  position: relative;
  padding-bottom: 22px;
  margin-bottom: 6px;
  &:first-of-type {
    margin-top: 12px;
  }

  label: input-label-container
`
const label =  css`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 6px;
  ::after {
    padding-left: 5px;
    color: #ac5858;
    content: "*";
  }
  label: label
`
const input = theme => css`
  color: ${theme.color1};
  background-color: ${theme.background1};
  border: 1px solid ${theme.border1};
  font-size: 18px;
  height: 40px;
  width: 100%;
  padding: 8px;
  border-radius: 8px;

  &:-webkit-autofill {
    -webkit-text-fill-color: ${theme.color1};
    -webkit-box-shadow: 0 0 0 500px ${theme.background1} inset;
  }

  &:hover {
    border-color: ${theme.hover3}
  }

  &:focus-visible {
    outline: 0;
    border-color: ${theme.colorHighlight1};
  }

  label: input
`

export default Input;
