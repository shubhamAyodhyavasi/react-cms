import React from 'react';
import {
  withRouter, Switch, Route
} from 'react-router-dom'

import {
  Login
} from './containers'
import {
  Dashboard,
  AdminLogin
} from './admin'
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route path="/" exact component={props => <div>home</div>} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={props => <Dashboard {...props} />} />
        <Route path="/admin/login" exact component={props => <AdminLogin {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
