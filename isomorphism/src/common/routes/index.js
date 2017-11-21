import React from 'react';
import { Route, Switch } from 'react-router';

import App from './../containers/App';

export default (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);
