import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import './components/App/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from 'components/App';
import initStore from './utils/store';

const history = createHistory();
const middleware = routerMiddleware(history);

ReactDOM.hydrate(
    <Provider store={initStore([middleware])}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
