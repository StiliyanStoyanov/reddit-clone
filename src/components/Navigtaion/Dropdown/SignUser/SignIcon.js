import React from "react";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";


export const SignIcon = () => {
    return(
        <LogoutIconContainer>
            <Logout icon={faSignInAlt}/>
        </LogoutIconContainer>
    )
}

const LogoutIconContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px;
  height: 36px;
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.dropdownIconBackground };
`
const Logout = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`