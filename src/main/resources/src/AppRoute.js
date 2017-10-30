import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './containers/Main/Main';
import SocketExamplePage from './containers/SocketExample/SocketExamplePage';


const AppRoute = ({store}) => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/socketexamplepage' component={SocketExamplePage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default AppRoute;