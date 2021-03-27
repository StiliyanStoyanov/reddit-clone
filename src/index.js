import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {UserStoreProvider} from "./store/UserStoreProvider";
import {ThemeProvider} from "./store/ThemeProvider";

ReactDOM.render(
    <UserStoreProvider>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </UserStoreProvider>,
    document.getElementById('root')
);
