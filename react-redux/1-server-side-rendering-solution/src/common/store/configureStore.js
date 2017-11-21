import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Cookies from 'cookies-js';
import { getCookiesMiddleware } from 'redux-cookies';

import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(getCookiesMiddleware(Cookies)),
      // for redux devTools chrome extension
      (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ?
        window.devToolsExtension() : f => f,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default; // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
