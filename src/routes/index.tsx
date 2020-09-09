import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AddStartup, EditStartup, Signup, Login } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/criar-startup" component={AddStartup} />
    <Route exact path="/editar/:id" component={EditStartup} />
  </Switch>
);

export default Routes;
