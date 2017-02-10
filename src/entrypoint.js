import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';
import './global.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
