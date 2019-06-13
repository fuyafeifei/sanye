import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/Login/Index';
import Main from './views/Main/Index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
       
      </Switch>
    </Router>
  );
}

export default RouterConfig;
