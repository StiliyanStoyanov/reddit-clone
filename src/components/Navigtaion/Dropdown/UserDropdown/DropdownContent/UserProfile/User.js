import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";
import {Name} from "./Name";
import {Avatar} from "./Avatar";
import {useStore} from "../../../../../../store/StoreProvider";
import DropdownItemsContainer from "../../../shared/DropdownItemsContainer";

export const User = () => {
    const {user, userExtraData} = useStore();
    if (user) {
        return (
            <DropdownItemsContainer>
                <UserProfileLink to={`/user/${userExtraData.username}`}/>
                <Avatar/>
                <Name user={userExtraData.username}/>
            </DropdownItemsContainer>
        );
    } else {
        return null
    }
}
/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const UserProfileLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`
export default User