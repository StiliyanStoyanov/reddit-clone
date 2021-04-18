/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// TODO: Pass the user avatar
export const Avatar = () => {
    return(
        <div css={container}>
            <img css={imgAvatar} alt=""/>
        </div>
    )
}

const container = css`
  margin: 8px 8px 12px 0;
  border-radius: 50%;
`
const imgAvatar = css`
  display: block;
  background-color: aqua;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`