/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import styled from "@emotion/styled";
import logo from '../../../assets/logo.svg'
import {Link} from "@reach/router";

export const Logo = () => {
    return (
        <Link css={LinkCss} to="/">
            <LogoStyled src={logo}/>
        </Link>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const LogoStyled = styled.img`
  height: 64px;
  width: 64px;
  display: block;
`

const LinkCss = css`
  display: inline-block;
`