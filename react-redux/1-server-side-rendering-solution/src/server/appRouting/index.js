import React from 'react';
import Cookies from 'cookies';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { getCookiesMiddleware } from 'redux-cookies';
import { createStore, applyMiddleware, compose } from 'redux';

import renderHTML from './template';
import routes from './../../common/routes';
import fetchComponentsData from './../_utils/http-utils';
import rootReducer from './../../common/reducers';

export default function appRouting(req, res) {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  const context = {};
  const cookies = new Cookies(req, res);
  const store = createStore(
    rootReducer,
    applyMiddleware(getCookiesMiddleware(cookies)),
    compose(
      applyMiddleware(thunkMiddleware),
    )
  );

  fetchComponentsData({
    dispatch: store.dispatch,
    components: [],
    params: req.params,
    query: req.query,
  }).then(() => {
    const componentHTML = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {routes}
        </StaticRouter>
      </Provider>
    );
    const html = renderHTML(
      componentHTML,
      store.getState(),
      webpackIsomorphicTools.assets(),
    );

    return { html };
  }).then(({ html }) => {
    res.end(html);
  });
}
