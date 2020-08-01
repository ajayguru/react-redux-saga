import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import '@babel/polyfill';
// Material UI Customization
import { MuiThemeProvider } from '@material-ui/core/styles';
import './styles/main.scss';
import App from './App';
import rootReducer from './reducers';
import history from './utils/history';
import rootSaga from './sagas';
import theme from './styles/theme';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger()),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <App history={history} />
                </Router>
            </Provider>
        </MuiThemeProvider>
    ), document.getElementById('app'),
);
