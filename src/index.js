import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {combineReducers, createStore, applyMiddleware} from "redux";

import {Provider} from 'react-redux';
import myProfileReducer from './reducers/myProfileReducer'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const allReducers = combineReducers({
    myProfileReducer: myProfileReducer,
});


const store = createStore(
    allReducers,
    // {},
    applyMiddleware(thunk, promise()),
    window.devToolsExtension && window.devToolsExtension(),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
