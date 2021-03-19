/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import { ReactComponent as ArrowSvg } from "../../../../assets/arrow.svg"

// TODO: Implement up and down votes functionality
export const ScoresButton = ({ direction }) => {
    const theme = useTheme();
    const scoreHandler = () => {
        console.log('score click');
    };

    return (
        <button css={buttonStyle(theme.scoresButton, direction)} onClick={scoreHandler}>
            <ArrowSvg/>
        </button>
    )
}

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