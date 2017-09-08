import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './containers/App/App';
import HomePage from './components/home/HomePage';
import CatsPage from './components/cats/CatsPage';
import CatPage from './components/cats/CatPage';
// import SocketExamplePage from './containers/SocketExample/SocketExamplePage';

export default () => (
    <div>
        <Route path='/' component={App} />
        {/*<Route path='/' component={HomePage} />*/}
        <Route path='/cats' component={CatsPage}>
            <Route path="/cats/:id" component={CatPage} />
        </Route>

        {/*<Route path="socketexamplepage" component={SocketExamplePage}/>*/}
    </div>
);