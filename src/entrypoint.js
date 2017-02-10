import App from './components/App';
import configureStore from './store/configureStore';
import history from './history';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';

import 'babel-polyfill';
import './global.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
