/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { ScoresButton } from "./ScoresButton";
import {css, jsx} from "@emotion/core";
import { colors } from "../../../../../styles";

export const Scores = ({ upvotes, hideOnSmallSize }) => {

    return (
        <div css={[outerContainer, hideOnSmallSize && hide]}>
            <div css={innerContainer}>
                <ScoresButton direction={'up'}/>
                <span css={scoreCount}>{upvotes}</span>
                <ScoresButton direction={'down'}/>
            </div>
        </div>
    )
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const hide = css`
  @media (max-width: 420px) {
    display: none;
  }
`
const outerContainer = css`
  position: absolute;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #161617;
  top: 0;
  left: 0;
  padding: 8px 4px 8px 0;
  border-left: 4px solid transparent;
  height: 100%;
  @media (max-width: 420px) {
    position: relative;
    background-color: transparent;
    padding: 1px;
    border: 0;
    margin-right: 4px;
  }
`
const innerContainer = css`
  display: flex;
  flex-direction: column;
  z-index: 2;
  font-size: 16px;
  @media (max-width: 420px) {
    flex-direction: row;
    align-items: center;
  }
`
const scoreCount = css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${colors.textWhite};
  margin: 0 2px;
`