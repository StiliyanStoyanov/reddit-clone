import React from "react";
import {ThemeProvider as Provider} from "@emotion/react";
import {Global} from "@emotion/react";
import {useUserStore} from "./UserStoreProvider";
import {darkTheme, lightTheme} from "../styles/themes";
import {global_styles} from "../styles/global_styles";

export const ThemeProvider = ({children}) => {
    const {theme} = useUserStore();
    return (
        <Provider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Global styles={global_styles}/>
            {children}
        </Provider>
    )
}




