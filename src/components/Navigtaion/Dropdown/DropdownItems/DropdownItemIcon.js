import React from "react";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropdownItemIcon = ({icon}) => {
    return (
        <IconContainer>
            <Icon icon={icon}/>
        </IconContainer>
    )
}
const IconContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px;
  height: 36px;
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.nav.iconContainerBackground };
`
const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`

export default DropdownItemIcon