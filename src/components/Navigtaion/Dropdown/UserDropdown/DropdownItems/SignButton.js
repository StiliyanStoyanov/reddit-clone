/** @jsxImportSource @emotion/react */
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {authModalActions, useAuthModalDispatch} from "../../../../../store/AuthModalStoreProvider";
import {dropdown_item_button} from "../../../../../styles/dropdown_styles";
import DropdownSpan from "../../DropdownItems/DropdownSpan";
import {useDropdownMethods} from "../../Dropdown";
const {openModal} = authModalActions;

const SignButton = () => {
    const {user} = useUserStore();
    const authModalDispatch = useAuthModalDispatch();
    const {closeDropdown} = useDropdownMethods();
    const handleButtonClick = event => {
        authModalDispatch({type: openModal, payload: {event}});
        closeDropdown(event);
    }
    if (user) {
        return null;
    }
    return (
        <button css={dropdown_item_button} onClick={handleButtonClick}>
            <DropdownIcon icon={faSignInAlt}/>
            <DropdownSpan>Sign Up / Sign In</DropdownSpan>
        </button>
    );
}
export default SignButton