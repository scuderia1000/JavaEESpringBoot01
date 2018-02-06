import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import "./styles/App.css";
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import SocketExamplePage from './containers/SocketExample/SocketExamplePage';


const AppRoute = ({store}) => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/socketexamplepage' component={SocketExamplePage}/>
                    <Route path='/main' component={Main}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default AppRoute;