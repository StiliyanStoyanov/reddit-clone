/* eslint-disable no-unused-vars */
import React from "react";
import {ThemeProvider as Provider, useTheme} from "emotion-theming";
import {css, Global} from "@emotion/core";
import {useStore} from "./StoreProvider";

const darkTheme = {
    theme: 'dark',
    color: '#e4e6eb',
    bodyBackgroundColor: '#050505',
    borderColor: '#343536',

    navBackgroundColor: '#1a1a1b',
    navIconColor: '#e4e6eb',
    navIconActiveColor: '#2d86ff',
    navIconsBackgroundColor: '#3a3b3c',
    navIconsHoverBackground: '#4e4f50',
    navIconsActiveBackground: '#e5f1fd',
    navIconsPathFillColor: '#a0a3a6',

    dropdownIconColor: '#3a3b3c',
    dropdownHoverColor: 'rgba(58, 59, 60, 0.6)',
    dropdownIconBackground: '#3a3b3c',

    scoresHoverBackground: 'rgba(215, 218, 220, 0.1)',
    scoresArrowColor: '#818384',
    scoresUpvotedColor: '#ff4500',
    scoresDownvotedColor: '#7193ff'
}
const lightTheme = {
    theme: 'light',
    color: '#050505',
    bodyBackgroundColor: '#ffffff',
    borderColor: '#dedede',

    navBackgroundColor: '#ffffff',
    navIconsColor: '#050505',
    navIconActiveColor: '#2d86ff',
    navIconsBackgroundColor: '#e4e6eb',
    navIconsHoverBackground: '#d6d8dd',
    navIconsActiveBackground: '#e5f1fd',
    navIconsPathFillColor: '#a0a3a6',

    dropdownIconColor: '#606770',
    dropdownHoverColor: 'rgba(242, 242, 242, 0.6)',
    dropdownIconBackground: '#e4e6eb',

    scoresHoverBackground: 'rgba(215, 218, 220, 0.1)',
    scoresArrowColor: '#818384',
    scoresUpvotedColor: '#ff4500',
    scoresDownvotedColor: '#7193ff'
}

export const ThemeProvider = (props) => {
    const {isThemeDark} = useStore();
    return (
        <Provider theme={isThemeDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            {props.children}
        </Provider>
    )
}

const GlobalStyles = () => {
    const theme = useTheme();
    return(
        <Global styles={css({
            html: {
                boxSizing: "border-box"
            },
            body: {
                margin: '0',
                padding: '0',
                fontFamily: 'Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;',
                backgroundColor: `${theme.bodyBackgroundColor}`,
                color: `${theme.color}`
            },
            '*, *::before, *::after': {
                boxSizing: "inherit"
            }
        })}/>
    )
}




