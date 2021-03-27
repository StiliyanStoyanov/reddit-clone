/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const LoginLink = () => {
    return (
        <div css={[linkContainer]}>
            <Link css={[link]} to="/login">
                LOG IN
            </Link>
        </div>
    )
}

const linkContainer = css`
  display: flex;
  box-shadow: inset 0 0 5px rgba(0,0,0, 0.2);
  margin-right: 5px;
  border-radius: 8px;
  label: login-link-container
`

const link = theme => css`
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  color: ${theme.color}
  label: login-link-container
`

export default LoginLink