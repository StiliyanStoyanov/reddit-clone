/** @jsxImportSource @emotion/react */
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import DropdownLinkItem from "../../DropdownItems/DropdownLinkItem";
import {itemTextStyle} from "../../../../../styles/Navigation/dropdownItemsStyles";

const SignLink = (props) => {
    const {user} = useUserStore();
    if (!user) {
        return (
            <DropdownLinkItem to={'/register'} {...props}>
                <DropdownItemIcon icon={faSignInAlt}/>
                <span css={itemTextStyle}>Sign Up / Sign In</span>
            </DropdownLinkItem>
        );
    } else {
        return null;
    }

}
export default SignLink