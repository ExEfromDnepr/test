import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import MyReducer from './modules/redux/reducers.js';
import App from './App';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(combineReducers({one: MyReducer}),applyMiddleware(thunkMiddleware, loggerMiddleware), );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
