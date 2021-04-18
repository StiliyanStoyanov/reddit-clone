/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const Username = ({username}) => {
    return (
        <div css={container}>
            <div css={name}>{username}</div>
            <div css={description}>See your profile</div>
        </div>
    )
}
const container = css`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 8px 8px 12px 0;
`
const name = css`
  font-size: 24px;
`
const description = css`
  font-size: 12px;
  padding-left: 2px;
`
