/** @jsx jsx */
/** @jsxFrag React.Fragment */
import styled from "@emotion/styled";
import { ScoresButton } from "./ScoresButton";
import {css, jsx} from "@emotion/core";
import { colors } from "../../../styles";
import {Link} from "@reach/router";

export const Scores = ({ upvotes }) => {


    return (
        <OuterContainer>
            <Link css={containerLink} to={"/Posts"}/>
            <InnerContainer>
                <ScoresButton direction={'up'}/>
                <ScoreCount>{upvotes}</ScoreCount>
                <ScoresButton direction={'down'}/>
            </InnerContainer>
        </OuterContainer>
    )
};

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  padding: 8px 4px 8px 0;
  border-left: 4px solid transparent;
  height: 100%;
  overflow: hidden;
  align-items: center;
  @media (max-width: 420px) {
    height: 32px;
    width: 86px;
    top: auto;
    bottom: 0;
    justify-content: center;
  }
`
const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  font-size: 16px;
  @media (max-width: 420px) {
    flex-direction: row;
    align-items: center;
  }
`
const ScoreCount = styled.div`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${colors.textWhite}
`
const containerLink = css`
  position: absolute;
  z-index: 1;
  top: 0;
  left: -4px;
  width: calc(100% + 4px);
  height: 100%;
  text-decoration: none;
`