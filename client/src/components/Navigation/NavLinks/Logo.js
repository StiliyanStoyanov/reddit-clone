/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core'
import styled from "@emotion/styled";
import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom";


const LogoStyled = styled.img`
  height: 64px;
  width: 64px;
  display: block;
`

const LinkCss = css`
  display: inline-block;
`

export const Logo = () => {
    return (
        <Link css={LinkCss} to="/">
            <LogoStyled src={logo}/>
        </Link>
    )
}