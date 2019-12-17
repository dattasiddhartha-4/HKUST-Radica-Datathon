import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Home from './components/Home/index';
import Main from './components/Main/index';
import ItemPage from './components/ItemPage/index';
import ErrorPage from './components/ErrorPage/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="main/:id" component={Main} />
    <Route path="top/:id" component={Main} />
    <Route path="item/:id" component={ItemPage} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
