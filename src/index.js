import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Circle from './components/circle'
import Text from './components/text';
import reducers from './reducers';
import Initial from './pages/initial';
import Main from './pages/main';
import appStore from './store/app-store';
// import routes from './routes';
import promise from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory}>
  <Route path="/" component={Initial}></Route>
  <Route path="/app" component={App}></Route>
  </Router>

  </Provider>, document.querySelector('.main-container'));
