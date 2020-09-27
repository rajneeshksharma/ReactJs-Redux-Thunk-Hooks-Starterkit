
import React from 'react';
import { Switch } from 'react-router-dom';
import Pages from '../pages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoutes';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path="/login" component={Pages.Login} />
      <PrivateRoute exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;