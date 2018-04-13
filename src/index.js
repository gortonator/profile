import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './css/ResultPanel.css';
import './css/SearchPage.css';
import './css/StudentFilter.css';
import './css/StudentResult.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {combineReducers, createStore, applyMiddleware} from "redux";

import {Provider} from 'react-redux';
import myProfileReducer from './reducers/myProfileReducer';
import otherProfileReducer from './reducers/otherProfileReducer';
import studentFilterReducer from "./reducers/student_filter_reducer";
import filterGroupReducer from "./reducers/filter_group_reducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import storeSynchronize from 'redux-localstore'

const allReducers = combineReducers({
    myProfileReducer: myProfileReducer,
    studentFilter: studentFilterReducer,
		filterGroup: filterGroupReducer,
    otherProfileReducer: otherProfileReducer,
});


const store = createStore(
    allReducers,
    // {},
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk, promise()),
);


storeSynchronize(store);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


export default store;
