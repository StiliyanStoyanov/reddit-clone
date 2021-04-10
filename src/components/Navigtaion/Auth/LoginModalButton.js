/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {authModalActions, useAuthModalDispatch} from "../../../store/AuthModalStoreProvider";
import {button_primary} from "../../../styles/button_styles";
const {openModal} = authModalActions

const LoginModalButton = () => {
    const authModalDispatch = useAuthModalDispatch();
    return (
        <div css={{label: "login-modal-button"}}>
            <button
                onClick={() => {
                    authModalDispatch({type: openModal, payload: {switchToForm: "login"}})
                }}
                css={[button_primary, button]}
            >
                Log In
            </button>
        </div>
    )
}
const button = css`
  margin-right: 5px;
`
export default LoginModalButton