/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, {useEffect, useRef, useState} from "react";
import firebase from "../../firebase";
import styled from "@emotion/styled";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {css, jsx} from "@emotion/core";
import {useClickOutside} from "../../hooks/useClickOutside";

const CommunitySelector = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [communities, setCommunities] = useState([]);
    const dropdownRef = useRef();

    useEffect(() => {
        const getCommunitiesList = async () => {
            const list = await firebase.firestore().collection('all-communities-list').get();
            const listArray = list.docs.map(doc => doc.id);
            setCommunities(listArray);
        }
        getCommunitiesList().catch(err => console.error(err));
    }, []);

    const outsideClick = () => {
        setOpen(false);
    }
    const handleChange = (event) => {
        setValue(event.target.value);
        setOpen(true);
    }
    const handleClick = () => {setOpen(prevState => !prevState)};
    useClickOutside(dropdownRef, outsideClick, open);
    return (
        <SelectorContainer>
            <SelectorInputContainer>
                <Search icon={faSearch}/>
                <InputSearch onChange={handleChange} onClick={handleClick} type="search" placeholder="Choose a community" spellCheck="false" value={value}/>
                <CaretDown icon={faCaretDown} onClick={handleClick}/>
            </SelectorInputContainer>
            <DropdownSearchContent active={open} ref={dropdownRef}>
                My Communities
                {communities.map(community => {
                    return <div>{community}</div>
                })}
            </DropdownSearchContent>
        </SelectorContainer>
    )
}

const SelectorContainer = styled.div`
  margin-bottom: 8px;
`
const SelectorInputContainer = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  height: 40px;
  min-width: 300px;
  width: 50%;
  background-color: ${({theme}) => theme.navBackgroundColor};
  border: 1px solid;
  border-radius: 4px;
  padding: 0 5px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
const Search = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`
const CaretDown = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  &:hover {
    cursor:pointer;
  }
`
const InputSearch = styled.input`
  outline: none;
  border: none;
  max-height: 26px;
  margin: 0 5px;
  width: 100%;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.navBackgroundColor};
  padding-left: 5px;
`

const DropdownSearchContent = styled.div`
  display: ${props => props.active ? 'block':'none'};
  max-height: 300px;
  overflow: auto;
  width: 50%;
  padding: 0 5px;
  border: 1px solid;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`

export default CommunitySelector
