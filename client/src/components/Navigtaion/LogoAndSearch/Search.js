/** @jsx jsx */
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";

export const Search = () => {
    return (
        <div css={css`padding: 0 5px`}>
            <SearchIconContainer>
                <SearchIcon icon={faSearch}/>
            </SearchIconContainer>
        </div>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const SearchIconContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.navIconsBackgroundColor};
  &:hover {
    background-color: ${({theme}) => theme.navIconsHoverBackground};
    opacity: 1;
  }
  cursor: pointer;
`
const SearchIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  opacity: 0.8;
`
