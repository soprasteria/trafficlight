// React Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Main
import Main from './components/app/app.js';

// Reducer
import trafficlight from './reducers/trafficlight.reducer.js'

const loggerMiddleware = createLogger()

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers(
    {
      routing: routerReducer,
      trafficlight
    }
  ),
  applyMiddleware(loggerMiddleware)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

window.onload = function(){
  ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' component={Main}/>
    </Router>
  </Provider>,
   document.getElementById('root'));
}
