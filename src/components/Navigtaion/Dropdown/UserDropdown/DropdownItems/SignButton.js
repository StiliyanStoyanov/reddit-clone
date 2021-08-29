/** @jsxImportSource @emotion/react */
import {useUserStore} from "../../../../../store/UserStore/UserStoreProvider";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {dropdown_item_button} from "../../../../../styles/dropdown_styles";
import DropdownSpan from "../../DropdownItems/DropdownSpan";
import {useDropdownMethods} from "../../Dropdown";
import {useAuthModalDispatch} from "../../../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../../../store/AuthModal/authModalActions";

const SignButton = () => {
    const {user} = useUserStore();
    const dispatch = useAuthModalDispatch();
    const {closeDropdown} = useDropdownMethods();
    const handleButtonClick = event => {
        dispatch(openModal());
        closeDropdown(event);
    }
    if (user) return null;
    return (
        <button css={dropdown_item_button} onClick={handleButtonClick}>
            <DropdownIcon icon={faSignInAlt}/>
            <DropdownSpan>Sign Up / Sign In</DropdownSpan>
        </button>
    );
}
export default SignButton