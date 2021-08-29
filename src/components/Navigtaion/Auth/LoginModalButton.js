/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useAuthModalDispatch} from "../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../store/AuthModal/authModalActions";
import {button_primary} from "../../../styles/button_styles";

const LoginModalButton = () => {
    const dispatch = useAuthModalDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(openModal('login'))}
                css={[button_primary, button]}
            >
                Log In
            </button>
        </div>
    )
}
const button = css`margin-right: 5px;`
export default LoginModalButton