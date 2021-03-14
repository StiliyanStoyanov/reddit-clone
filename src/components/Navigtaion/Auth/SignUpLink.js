/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import {Link} from "@reach/router";

const SignUpLink = () => {
    const theme = useTheme();
    return (
        <div css={container}>
            <Link css={link(theme)} to="register">
                SIGN UP
            </Link>
        </div>
    )
}

const container = css`
  display: flex;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  background-color: white;
  border-radius: 8px;
  border: 1px solid white;
  color: black;
`
const link = theme => css`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  color: ${theme.theme === 'dark' ? theme.backgroundColor : theme.color}
`

export default SignUpLink