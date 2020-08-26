/** @jsx jsx */
import {jsx, css} from "@emotion/core";

export const Name = ({user}) => {
    return(
        <div css={nameContainer}>
            <div css={nameText}>{user}</div>
            <div css={nameExtraDescription}>See your profile</div>
        </div>
    )
}
/* STYLED COMPONENTS USED IN THIS FILE BELOW */
const nameContainer = css`
  display: flex;
  flex-flow: column;
  align-items: flex-start; 
  justify-content: flex-start; 
  margin: 8px 8px 12px 0;
`
const nameText = css`
  font-size: 24px;
`
const nameExtraDescription = css`
  font-size: 12px;
  padding-left: 2px;
`
