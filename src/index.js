import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import Login from './componentes/Login';
import App from './App';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Logout from './componentes/Logout'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/timeline/:login" component={App}/>
      <PrivateRoute path="/timeline" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

