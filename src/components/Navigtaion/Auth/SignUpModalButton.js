/** @jsxImportSource @emotion/react */
import {useAuthModalDispatch} from "../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../store/AuthModal/authModalActions";
import {button_primary} from "../../../styles/button_styles";

const SignUpModalButton = () => {
    const dispatch = useAuthModalDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(openModal())}
                css={[button_primary]}
            >
                Sign Up
            </button>
        </div>
    )
}

export default SignUpModalButton