/** @jsxImportSource @emotion/react */
import {memo} from "react";
import {css} from "@emotion/react";
import {useCallback, useState} from "react";
import ShowHidePasswordButton from "./ShowHidePasswordButton";
import ErrorMessage from "./ErrorMessage";

const Input = memo(({visible, register, rules, error, isDirty, name, type, placeholder}) => {
    const [inputType, setInputType] = useState(type);

    const showHidePassword = useCallback(() => {
        inputType !== "password" ? setInputType("password") : setInputType(type);
    }, [inputType]);

    return (
        <div css={[container]}>
            <input
                autoComplete="off"
                {...register(name, rules)}
                css={[input, error && inputError]}
                type={inputType}
            />
            <label
                css={[
                    label,
                    isDirty && labelTransform,
                    visible && labelTransition
                ]}
            >
                {placeholder}
            </label>
            {type === 'password' && <ShowHidePasswordButton showHidePassword={showHidePassword}/>}
            {error && <ErrorMessage error={error}/>}
        </div>

    );
});

const container = css`
  position: relative;
  padding: 0;
  border: 0;
  margin: 0 0 20px;
  label: input-container
`
const labelTransform = css`
  transform: translate3d(0, -12px, 0) scale(0.65);
  label: -transformed
`
const labelTransition = css`
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
  border: 1px solid ${theme.settings.borderColor};
  &:focus-visible {
    border: 1px solid ${theme.settings.formFocusBorderColor}
  }
  border-radius: 4px;
  box-sizing: border-box;
  color: ${theme.settings.color};
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
const inputError = theme => css`
  border: 1px solid ${theme.settings.formErrorBorderColor};
  label: -error
`

export default Input;
