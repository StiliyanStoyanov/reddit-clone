import React from 'react';
import styled from "@emotion/styled";
import { unit, colors } from "../../styles";
import Icon from "./Icon";

const Navigation = styled.nav`
  background-color: ${colors.darkGray};
  border: 1px solid ${colors.white};
  padding: ${unit}px ${unit*2}px;
`

const NavigationBar = () => {


    return (
        <header>
            <Navigation>
                <Icon/>
                <Icon/>
            </Navigation>
        </header>
    )
}


export default NavigationBar