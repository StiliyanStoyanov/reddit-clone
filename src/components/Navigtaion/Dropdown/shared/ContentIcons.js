import React from "react";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContentIcon = ({icon}) => {
    return (
        <ContentIconContainer>
            <Icon icon={icon}/>
        </ContentIconContainer>
    )
}
const ContentIconContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px;
  height: 36px;
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.dropdownIconBackground };
`
const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`

export default ContentIcon