import React from "react";
import ReactDom from "react-dom";
import AppRouter from "./AppRoute";
import ReduxStore from './redux/ReduxStore';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

ReactDom.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppRouter store={ReduxStore} />
    </MuiThemeProvider>,
    document.getElementById('react')
);