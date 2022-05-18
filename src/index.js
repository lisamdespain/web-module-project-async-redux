import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = { count: 0 }
    function reducer(state = initialState, action) {
      return state
    }
let store
    export const resetStore = () => {
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    }
    resetStore()

ReactDOM.render(
  <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);
