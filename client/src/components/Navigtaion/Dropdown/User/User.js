import React from "react";
import styled from "@emotion/styled";
import {Link} from "@reach/router";
import {Name} from "./Name";
import {Avatar} from "./Avatar";

export const User = ({user}) => {
    if (user) {
        return (
            <UserContainer>
                <UserProfileLink to={`/user/${user}`} />
                <Avatar/>
                <Name user={user}/>
            </UserContainer>
        );
    } else {
        return null
    }
}
/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover {
    background-color: ${ ({theme}) => theme.dropdownHoverColor }
  }
`
const UserProfileLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`
export default User