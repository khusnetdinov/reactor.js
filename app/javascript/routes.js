import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Layout} />
  </Router>
);
