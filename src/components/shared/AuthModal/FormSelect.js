/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useAuthModalDispatch, useAuthModalStore} from "../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../store/AuthModal/authModalActions";
import FormSelectButton from "./FormSelectButton";

const FormSelect = () => {
    const dispatch = useAuthModalDispatch();
    const store = useAuthModalStore();
    const isLoginActive = store.activeForm === "login";
    const isSignUpActive = store.activeForm === "signup";
    const handleLoginSelectButton = () => dispatch(openModal("login"))
    const handleSignupSelectButton = () => dispatch(openModal("signup"))

    return (
        <ul css={[ul]}>
            <li css={[li]}>
                <FormSelectButton isActive={isLoginActive} onClick={handleLoginSelectButton}>
                    Log in
                </FormSelectButton>
            </li>
            <li css={[li]}>
                <FormSelectButton isActive={isSignUpActive} onClick={handleSignupSelectButton}>
                    Sign Up
                </FormSelectButton>
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

export default FormSelect;
