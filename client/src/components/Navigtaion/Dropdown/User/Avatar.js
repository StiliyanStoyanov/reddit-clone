import React from "react";
import styled from "@emotion/styled";

// TODO: Pass the user avatar
export const Avatar = () => {
    return(
        <AvatarContainer>
            <UserAvatar/>
        </AvatarContainer>
    )
}

/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const AvatarContainer = styled.div`
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.dropdownIconBackground };
`
const UserAvatar = styled.img`
  display: block;
  background-color: aqua;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`