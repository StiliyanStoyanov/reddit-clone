import React from "react";
import styled from "@emotion/styled";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MoonIcon = () => {
    return(
        <MoonIconContainer>
            <Moon icon={faMoon}/>
        </MoonIconContainer>
    )
}

const MoonIconContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px;
  height: 36px;
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.dropdownIconBackground };
`
const Moon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`