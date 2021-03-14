/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const Name = ({username}) => {
    return(
        <div css={nameContainer}>
            <div css={nameText}>{username}</div>
            <div css={nameExtraDescription}>See your profile</div>
        </div>
    )
}
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
