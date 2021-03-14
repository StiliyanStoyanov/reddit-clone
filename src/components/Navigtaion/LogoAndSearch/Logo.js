/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import logo from '../../../assets/logo.svg'
import {Link} from "@reach/router";

export const Logo = () => {
    return (
        <Link css={link} to="/">
            <img css={img} src={logo} alt="not-found"/>
        </Link>
    )
}

const img = css`
  height: 64px;
  width: 64px;
  display: block;
  label: logo
`

const link = css`
  display: inline-block;
`