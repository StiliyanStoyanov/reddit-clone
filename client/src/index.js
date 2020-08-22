import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createHistory, LocationProvider} from "@reach/router";
import {StoreProvider} from "./store/StoreProvider";
import {ThemeProvider} from "./store/ThemeProvider";

const history = createHistory(window);
ReactDOM.render(
        <LocationProvider history={history}>
            <StoreProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </StoreProvider>
        </LocationProvider>,
    document.getElementById('root')
);
