import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

const App = () => (
  <div>
    <Switch>
    <Route 
      exact
      path="/"
      render={() => <Redirect to="/dashboard/homepage" />}
    />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    </Switch>
  </div>
);

export default App;
