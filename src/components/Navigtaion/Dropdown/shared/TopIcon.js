import React from "react";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopIcon = ({icon, showHideContent, open}) => {
    return (
        <TopIconContainer open={open} onClick={showHideContent}>
            <Icon icon={icon}/>
        </TopIconContainer>
    )
}
const TopIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.navIconsBackgroundColor};
  &:hover {
    background-color: ${({theme}) => theme.navIconsHoverBackground};
    opacity: 1;
  }
  color: ${({open, theme}) => open ? theme.navIconActiveColor : null};
`
const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  opacity: 0.8;
`;

export default TopIcon