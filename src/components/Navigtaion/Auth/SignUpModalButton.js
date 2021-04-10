/** @jsxImportSource @emotion/react */
import {authModalActions, useAuthModalDispatch} from "../../../store/AuthModalStoreProvider";
import {button_primary} from "../../../styles/button_styles";
const {openModal} = authModalActions

const SignUpModalButton = () => {
    const authModalDispatch = useAuthModalDispatch();
    return (
        <div css={{label: "signup-modal-button"}}>
            <button
                onClick={() => {
                    authModalDispatch({type: openModal, payload: {switchToForm: "signup"}})
                }}
                css={[button_primary]}
            >
                Sign Up
            </button>
        </div>
    )
}

export default SignUpModalButton