/* eslint-disable no-unused-vars */
import React, {useRef, useState} from "react";
import styled from "@emotion/styled";


const Dropdown = ({children}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const onClickOutside = () => {
        setOpen(false);
    };
    const showHideContent = () => {
        setOpen(!open);
    }

    return (
        <DropdownMenu ref={dropdownRef}>
            {React.cloneElement(children, {dropdownRef, onClickOutside, open, showHideContent})}
        </DropdownMenu>
    );
};

/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const DropdownMenu = styled.div`
  z-index: 1;
  cursor:pointer;
  margin-left: 5px;
`;

export default Dropdown

