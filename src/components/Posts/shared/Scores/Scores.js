/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import { ScoresButton } from "./ScoresButton";

export const Scores = ({ upvotes, hideOnSmallSize, hideOnBigSize }) => {
    const theme = useTheme();
    return (
        <div css={[
            outerContainer(theme.scores),
            hideOnSmallSize && hideSmall,
            hideOnBigSize && hideBig
        ]}>
            <div css={innerContainer}>
                <ScoresButton direction={'up'}/>
                <span css={scoreCount(theme.scores)}>{upvotes}</span>
                <ScoresButton direction={'down'}/>
            </div>
        </div>
    )
};

const hideBig = css`
  @media (min-width: 420px) {
    display: none;
  }
`
const hideSmall = css`
  @media (max-width: 420px) {
    display: none;
  }
`
const outerContainer = theme => css`
  position: absolute;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${theme.containerBackgroundColor};
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
const scoreCount = theme => css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${theme.textColor};
  margin: 0 2px;
`