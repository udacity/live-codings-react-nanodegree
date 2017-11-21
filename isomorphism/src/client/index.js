import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'),
);
