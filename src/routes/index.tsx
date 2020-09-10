import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AddStartup, EditStartup, Signup, Login } from '../pages';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute exact path="/criar-startup" component={AddStartup} />
    <PrivateRoute exact path="/editar/:id" component={EditStartup} />
  </Switch>
);

export default Routes;
