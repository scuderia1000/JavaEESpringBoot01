import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routes";
import ReduxStore from './redux/ReduxStore';

ReactDom.render(
    <Provider store={ReduxStore}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react')
);