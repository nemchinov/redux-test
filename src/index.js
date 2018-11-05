import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import initialState from './storage/initial';
import rootReducer from './storage/reducer';

import './index.css';

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
