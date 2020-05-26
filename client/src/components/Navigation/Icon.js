/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import styled from "@emotion/styled";
import icon from '../../assets/logo.svg'


const Icon = styled.img`
  height: 64px;
  width: 64px;
  display: block;
`
const aCss = css`
  display: inline-block;
`

const IconLink = () => {
    return (
        <a css={aCss} href="/">
            <Icon src={icon} />
        </a>
    );
}

export default IconLink