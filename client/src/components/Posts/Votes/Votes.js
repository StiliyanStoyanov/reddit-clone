/** @jsx jsx */
/** @jsxFrag React.Fragment */
import styled from "@emotion/styled";
import { ArrowButton } from "./ArrowButton";
import { VotesContainer } from "./VotesContainer";
import {css, jsx} from "@emotion/core";
import { colors } from "../../../styles";
import {Link} from "react-router-dom";

export const Votes = ({ upvotes }) => {


    return (
        <VotesContainer>
            <Link css={ContainerLink} to={"/posts"}/>
            <InnerContainer>
                <ArrowButton direction={'up'}/>
                <div css={upvotesCount}>{upvotes}</div>
                <ArrowButton direction={'down'}/>
            </InnerContainer>
        </VotesContainer>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
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
const upvotesCount = css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${colors.textWhite}
`
const ContainerLink = css`
  position: absolute;
  z-index: 1;
  top: 0;
  left: -4px;
  width: calc(100% + 4px);
  height: 100%;
  text-decoration: none;
`