/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import {Link} from "@reach/router";

const LoginLink = () => {
    const theme = useTheme();
    return (
        <div css={container}>
            <Link css={link(theme)} to="login">
                LOG IN
            </Link>
        </div>
    )
}

const container = css`
  display: flex;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  margin-right: 5px;
  border-radius: 8px;
`

const link = theme => css`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  color: ${theme.color}
`

export default LoginLink