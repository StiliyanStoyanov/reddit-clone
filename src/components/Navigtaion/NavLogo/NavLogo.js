/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Logo from "../../shared/Logo/Logo";
import {Link} from "react-router-dom";

export const NavLogo = () => {
    return (
        <Link to="/">
            <Logo css={logo}/>
        </Link>
    )
}

const logo = css`
  height: 64px;
  width: 64px;
`