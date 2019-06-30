import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import Login from './componentes/Login';
import App from './App';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/timeline" component={App}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
