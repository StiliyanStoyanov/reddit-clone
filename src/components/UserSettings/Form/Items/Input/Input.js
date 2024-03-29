/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useState} from "react";
import ShowHidePasswordButton from "./ShowHidePasswordButton";
import ErrorMessage from "./ErrorMessage";

const Input = ({visible, register, rules, error, isDirty, autoComplete, name, type, placeholder}) => {
    const [inputType, setInputType] = useState(type);

    const showHidePassword = () => {
        inputType !== "password" ? setInputType(type) : setInputType("text");
    };

    return (
        <div css={[container]}>
            <input
                autoComplete={autoComplete}
                {...register(name, rules)}
                css={[input, error && input_error]}
                type={inputType}
            />
            <label
                css={[
                    label,
                    isDirty && labelTransform,
                    visible && label_transition
                ]}
            >
                {placeholder}
            </label>
            {type === 'password' && <ShowHidePasswordButton showHidePassword={showHidePassword}/>}
            {error && <ErrorMessage error={error}/>}
        </div>

    );
};

const container = css`
  position: relative;
  padding: 0;
  border: 0;
  margin: 0 0 20px;
  label: input-container
`
const labelTransform = css`
  transform: translate3d(0, -12px, 0) scale(0.65);
  label: transformed
`
const label_transition = css`
  transition: all 0.2s ease-in-out;
`
const label =  css`
  color: #a5a4a4;
  display: inline-block;
  position: absolute;
  left: 12px;
  top: 16px;
  height: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .5px;
  text-transform: uppercase;
  &:focus-visible, &:hover {
    ${labelTransform};
  }
  transform-origin: 0 50%;
  label: input-label
`
const input = theme => css`
  font-size: 16px;
  font-weight: 400;
  font-family: Noto Sans, Arial, sans-serif;
  width: 100%;
  background: transparent;
  outline: 0;
  border: 1px solid ${theme.border1};
  &:focus-visible {
    border: 1px solid ${theme.colorHighlight1}
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${theme.color1};
    -webkit-box-shadow: 0 0 0 500px ${theme.background1} inset;
  }
  border-radius: 4px;
  box-sizing: border-box;
  color: ${theme.color1};
  height: 52px;
  padding: 20px 12px 12px;
  &:hover + label, &:focus-visible + label {
    ${labelTransform};
  }
  &::placeholder {
    text-transform: uppercase;
  }
  label: input
`
const input_error = theme => css`
  border: 1px solid ${theme.colorDanger1};
  label: error
`

export default Input;
