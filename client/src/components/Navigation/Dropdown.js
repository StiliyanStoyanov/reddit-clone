import React, {useState} from "react";
import styled from "@emotion/styled";
import { colors, padding }  from "../../styles";


// TODO: Setup actual links after setting up the server

const DropdownMenu = (props) => {
    const [isActive, setIsActive] = useState(false);
    const showHideContent = () => {
        setIsActive(!isActive);
    };

    return (
        <Dropdown onClick={showHideContent} isActive={isActive}>
            {props.panel}
            <DropdownContent isActive={isActive}>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
            </DropdownContent>
        </Dropdown>
    )
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
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 1;
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
  display: ${props => props.isActive ? 'block' : 'none'}
}
`;

export default DropdownMenu

