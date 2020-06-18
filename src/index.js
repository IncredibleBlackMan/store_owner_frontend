import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import storeConfig from './store/index';

const history = createBrowserHistory();
const store = storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
