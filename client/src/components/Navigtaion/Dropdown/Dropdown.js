/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import styled from "@emotion/styled";
import {colors, padding} from "../../../styles";
import AnonymousUser from "./AnonymousUser";
import {Avatar} from "../Avatar";



const DropdownMenu = (props) => {
    const [isActive, setIsActive] = useState(false);

    const showHideContent = () => {
        setIsActive(!isActive);
        console.log(props);
    };

    return (
        <Dropdown onClick={showHideContent} isActive={isActive}>
            {props.panel === 'anonymous' && <Avatar/>}
            <DropdownContent isActive={isActive} panel={props.panel}>
                <AnonymousUser/>
            </DropdownContent>
        </Dropdown>
    );
};

/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  color: ${colors.textColor};
  background-color: ${colors.backgroundColor};
  width: 270px;
  margin-right: 10px;
  padding: ${padding};
  border-radius: 8px 8px 0 0;
  ${props => props.isActive
    ? ({border: `1px solid ${colors.borderColor}`, borderBottom: 'none'})
    : null};
  &:hover {
    ${props => props.isActive ?
    null :
    ({
        border: `1px solid ${colors.borderColor}`,
        borderRadius: '8px'
    })};
    cursor: pointer;
  };
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${colors.backgroundColor};
  max-height: 480px;
  width: 270px;
  padding: ${padding};
  border-radius: 0 0 8px 8px;
  top: 33px;
  left: -1px;
  overflow: auto;
  border: 1px solid ${colors.borderColor};
  border-top: 0;
  display: ${props => props.isActive ? 'block' : 'none'};
  @media (max-width: 1000px) {
    width: 160px;
    min-width: 160px;
  }
}
`;

export default DropdownMenu

