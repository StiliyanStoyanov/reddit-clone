/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import {css, jsx} from "@emotion/core";
import { ReactComponent as ArrowSvg } from "../../../../../assets/arrow.svg"
import {useTheme} from "emotion-theming";


// TODO: Implement up and down votes functionality
export const ScoresButton = ({ direction }) => {
    const {scoresButton} = useTheme();
    const scoreHandler = () => {
        console.log('click');
    };

    return (
        <button css={buttonStyle(scoresButton, direction)} onClick={scoreHandler}>
            <ArrowSvg/>
        </button>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const buttonStyle = ({hoverBackground, upvoteRed, downvoteBlue, arrowColor}, direction) => css`
  max-height: 24px;
  position: relative;
  z-index: 2;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  svg {
    width: 24px;
    height: auto;
    border-radius: 2px;
    ${direction === 'down' ? 'transform: rotate(180deg)' : null};
  }
  &:hover, &:focus-visible {
    svg {
      background-color: ${hoverBackground};
      path {
        fill: ${direction === 'down' ? downvoteBlue : upvoteRed};
        opacity: 1;
      }
    }
  }
`