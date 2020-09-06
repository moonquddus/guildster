import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import apiHandler from './lib/apiHandler'
import { Route, Switch } from "react-router-dom"
import Start from './views/start'

const App = () => {

  useEffect(() => {
    apiHandler.getCsrfToken()
    apiHandler.getUserOnStart()
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Start} />
    </Switch>
  );
}

export default App;
