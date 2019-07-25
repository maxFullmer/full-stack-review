import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// must import broswer router or hashrouter
import {BrowserRouter} from 'react-router-dom'
//
import {Provider} from 'react-redux';
import store from './redux/store.js';
import * as serviceWorker from './serviceWorker';

//Any place that needs routing must be wrapped in either HashRouter or BrowserRouter
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
