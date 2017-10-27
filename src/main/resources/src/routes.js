import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import App from './containers/App/App';
import SocketExamplePage from './containers/SocketExample/SocketExamplePage';

export default () => (
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/socketexamplepage' component={SocketExamplePage}/>
        </Switch>
);