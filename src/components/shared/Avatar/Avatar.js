/** @jsxImportSource @emotion/react */
import {memo} from "react";
import Identicon from "./Identicon";
import {css} from "@emotion/react";


const Avatar = memo(({avatarUrl, username = "default", size = 50, className = null}) => {
    return (
        <img
            css={avatar_base}
            width={size}
            height={size}
            className={className}
            src={avatarUrl}
            alt={`${username} avatar`}
        />
    )
});

const avatar_base = theme => css`
  display: block;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${theme.background3};
  label: avatar
`
export default Avatar;
