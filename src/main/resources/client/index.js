import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routes";
import configureStore from './store/configureStore';
import {loadCats} from './actions/catActions';
import {loadHobbies} from './actions/hobbyActions';

const store = configureStore();

store.dispatch(loadCats());
store.dispatch(loadHobbies());

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react')
);