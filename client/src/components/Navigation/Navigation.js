import React from 'react';
import styled from "@emotion/styled";
import { unit, colors } from "../../styles";

const Navigation = styled.nav`
  background-color: ${colors.darkGray};
  border: 1px solid ${colors.white};
  padding: ${unit}px ${unit*2}px;
`

const NavigationBar = () => {


    return (
        <header>
            <Navigation>
                content
            </Navigation>
        </header>
    )
}


export default NavigationBar