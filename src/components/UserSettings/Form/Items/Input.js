/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useEffect, useState} from "react";
import {useWatch} from "react-hook-form";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Input = ({name, placeholder, type, register, error, visible, control}) => {
    const theme = useTheme();
    const [inputType, setInputType] = useState(type);
    const userInput = useWatch({
        control,
        name,
        defaultValue: ''
    });
    const handleEyeButton = event => {
        if (event.key && event.key === 'Tab') {
            return;
        }
        const [text, password] = ['text', 'password'];
        if (inputType === text) {
            setInputType(password);
        } else if (inputType === password) {
            setInputType(text);
        }
    }

    useEffect(() => {
        if (error && error.code === 'auth/wrong-password') {
            error.ref.focus();
        }
    }, [error]);
    // TODO: Add autocomplete for password managers https://www.chromium.org/developers/design-documents/create-amazing-password-forms
    return (
        <fieldset css={container}>
            <input
                id={name}
                autoComplete="off"
                ref={register}
                css={input(theme, error)}
                name={name}
                type={inputType}
            />
            <label css={label(theme, visible, userInput)} htmlFor={name}>
                {placeholder}
            </label>
            {type === 'password' &&
            <button type="button" css={button} onMouseDown={handleEyeButton} onKeyDown={handleEyeButton}>
                <FontAwesomeIcon css={icon(theme)} icon={faEye}/>
            </button>}
            {error && <div css={divError}>{error.message}</div>}
        </fieldset>

    );
};

const container = css`
  position: relative;
  padding: 0;
  border: 0;
  margin: 0 0 20px;
`
const label = (theme, visible, userInput) => css`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .5px;
  transform-origin: 0 50%;
  ${visible && 'transition: all 0.2s ease-in-out'};
  ${userInput && 'transform: translate3d(0, -12px, 0) scale(0.65)'};
  position: absolute;
  display: inline-block;
  height: 20px;
  left: 12px;
  top: 16px;
  color: #a5a4a4;
  text-transform: uppercase;
`
const input = (theme, error) => css`
  margin: 0;
  font-family: Noto Sans,Arial,sans-serif;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  background: none;
  outline: 0;
  border: 1px solid ${error ? theme.settings.formErrorBorderColor : theme.settings.borderColor};
  &:focus-visible {
    border: 1px solid ${theme.settings.formFocusBorderColor}
  }
  border-radius: 4px;
  box-sizing: border-box;
  color: ${theme.settings.color};
  height: 52px;
  padding: 20px 12px 12px;
  &:hover + label, &:focus + label {
    transform: translate3d(0, -12px, 0) scale(0.65);
  }
  &::placeholder {
    text-transform: uppercase;
  }
`

const icon = theme => css`
  font-size: 20px;
  color: ${theme.color};
`
const button = css`
  background: transparent;
  position: absolute;
  top: 16px;
  right: 12px;
  border: 0;
  cursor: pointer;
  &:hover, &:focus-visible {
    &::after {
     position: absolute;
     font-size: 12px;
     white-space: nowrap;
     padding: 4px;
     border-radius: 4px;
     top: 26px;
     left: -30px;
     content: 'Show Password';
     color: white;
     background-color: #353535
    }
  } 
`

const divError = css`
  font-size: 12px;
  position: absolute;
  bottom: -16px;
  left: 4px;
  color: #ff9eae;
`

export default Input;
