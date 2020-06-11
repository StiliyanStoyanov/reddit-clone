/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React from "react";
import {css, jsx} from "@emotion/core";
import {arrowsColors} from "../../../styles";
import styled from "@emotion/styled";
import { ReactComponent as ArrowSvg } from "../../../assets/arrow.svg"

const {upvoteRed, downvoteBlue, arrowColor, hoverBackground} = arrowsColors

export const ArrowButton = ({ direction }) => {

    const arrowHandler = () => {

    };

    return (
        <button css={buttonStyle} onClick={arrowHandler}>
            <ArrowStyled direction={direction}/>
        </button>

    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const ArrowStyled = styled(ArrowSvg)`
  width: 24px;
  height: auto;
  border-radius: 2px;
  &:hover {
    background-color: ${hoverBackground};
    path {
      fill: ${({ direction }) => 
      direction === 'down' ? `${downvoteBlue}` : `${upvoteRed}`};
      opacity: 1;
    }
  }
  ${ ({ direction }) => 
    direction === 'down' 
    ? `transform: rotate(180deg)`
    : null};
`

const buttonStyle = css`
  max-height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
`