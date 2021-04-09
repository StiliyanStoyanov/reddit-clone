/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {authModalActions, useAuthModalDispatch, useAuthModalStore} from "../../../store/AuthModalStoreProvider";
const {switchActiveForm} = authModalActions

const FormSelect = () => {
    const {activeForm} = useAuthModalStore();
    const loginActive = activeForm === "login"
    const signUpActive = activeForm === "signup"
    const authModalDispatch = useAuthModalDispatch();
    const handleButtonClick = (switchToForm, event) => {
        authModalDispatch({
            type: switchActiveForm,
            payload: {
                event,
                switchToForm
            }
        })
    }
    return (
        <ul css={[ul]}>
            <li css={[li]}>
                <button
                    onClick={(event) => handleButtonClick("login", event)}
                    css={[buttonBase, loginActive && buttonActive]}
                >
                    Log In
                </button>
            </li>
            <li css={[li]}>
                <button
                    onClick={(event) => handleButtonClick("signup", event)}
                    css={[buttonBase, signUpActive && buttonActive]}
                >
                    Sign Up
                </button>
            </li>
        </ul>
    );
};

const ul = theme => css`
  display: flex;
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid ${theme.border1};
  label: form-select-ul;
`
const li = css`
  padding: 0 20px 0 0;
  label: form-select-li;
`

const buttonBase = theme => css`
  color: ${theme.color1};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.2;
  outline-offset: 6px;
  padding: 0;
  height: 28px;
  border: 0;
  background-color: transparent;
  label: form-select-button
`

const buttonActive = theme => css`
  border-bottom: 3px solid ${theme.colorHighlight2};
  label: -active
`

export default FormSelect;
