/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const SignUpLink = () => {
    return (
        <div css={[container]}>
            <Link css={[link]} to="/register">
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
  label: signup-link-container
`
const link = theme => css`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  color: ${theme.theme === 'dark' ? theme.backgroundColor : theme.color}
  label: singup-link
`

export default SignUpLink