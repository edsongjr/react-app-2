import React, { Component } from 'react';
import {Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {

    render(){
      if(!this.usuarioAutenticado()){
        return <Redirect to="/?msg=Faça o login"/>
      }return <Route {...this.props}/>
    }
  
    usuarioAutenticado(){
      return localStorage.getItem("auth-token") != null;
    }
  }