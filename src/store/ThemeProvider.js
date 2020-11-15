import React from "react";
import {ThemeProvider as Provider, useTheme} from "emotion-theming";
import {css, Global} from "@emotion/core";
import {useUserStore} from "./UserStoreProvider";
import {darkTheme, lightTheme} from "../styles/themes";

export const ThemeProvider = (props) => {
    const {theme} = useUserStore();
    return (
        <Provider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
                backgroundColor: `${theme.backgroundColor}`,
                color: `${theme.color}`,
                minWidth: '375px'
            },
            '*, *::before, *::after': {
                boxSizing: "inherit"
            },
            '&:focus:not(:focus-visible)': {
                outline: 0
            },
            a: {
                textDecoration: "none",
                color: "inherit"
            }
        })}/>
    )
}




