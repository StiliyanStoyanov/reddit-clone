import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {UserStoreProvider} from "./store/UserStoreProvider";
import {ThemeProvider} from "./store/ThemeProvider";
import {AuthModalStoreProvider} from "./store/AuthModalStoreProvider";

ReactDOM.render(
    <BrowserRouter>
        <UserStoreProvider>
            <ThemeProvider>
                <AuthModalStoreProvider>
                    <App/>
                </AuthModalStoreProvider>
            </ThemeProvider>
        </UserStoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
