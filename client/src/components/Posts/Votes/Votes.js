/** @jsx jsx */
/** @jsxFrag React.Fragment */
import styled from "@emotion/styled";
import { ArrowButton } from "./ArrowButton";
import { VotesContainer } from "./VotesContainer";
import {css, jsx} from "@emotion/core";
import { colors } from "../../../styles";

export const Votes = ({ upvotes }) => {


    return (
        <VotesContainer>
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
  font-size: 16px
`
const upvotesCount = css`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  color: ${colors.textWhite}
`