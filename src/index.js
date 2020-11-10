import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createHistory, LocationProvider} from "@reach/router";
import {UserStoreProvider} from "./store/UserStoreProvider";
import {ThemeProvider} from "./store/ThemeProvider";

const history = createHistory(window);
ReactDOM.render(
        <LocationProvider history={history}>
            <UserStoreProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </UserStoreProvider>
        </LocationProvider>,
    document.getElementById('root')
);
