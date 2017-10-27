import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {wsMiddleware} from './middleware/socketExampleMiddleware';

const preloadedState = {};

function makeStore(history) {

    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = [
        // createMiddleware(client),
        reduxRouterMiddleware,
        thunk,
        wsMiddleware
    ];

    return createStore(rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware)));
}

const ReduxStore = makeStore();

export default ReduxStore;