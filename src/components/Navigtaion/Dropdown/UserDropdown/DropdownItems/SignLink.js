/** @jsx jsx */
import styled from "@emotion/styled";
import {jsx} from "@emotion/core";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import DropdownLinkItem from "../../DropdownItems/DropdownLinkItem";

const SignLink = (props) => {
    const {user} = useUserStore();
    if (!user) {
        return (
            <DropdownLinkItem to={'/register'} {...props}>
                <DropdownItemIcon icon={faSignInAlt}/>
                <SignUserText>Sign Up / Sign In</SignUserText>
            </DropdownLinkItem>
        );
    } else {
        return null;
    }

}
/* STYLED COMPONENTS || STYLES USED IN THIS FILE BELOW */
const SignUserText = styled.span`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default SignLink