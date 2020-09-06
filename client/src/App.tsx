import React, { useEffect, JSXElementConstructor } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import apiHandler from './lib/apiHandler'
import Start from './views/start'
import Login from './views/login'
import { IState } from './redux/reducers'

type AppProps = {
  isLoggedIn: boolean
}

const App = (props: AppProps) => {

  useEffect(() => {
    apiHandler.getCsrfToken()
    apiHandler.getUserOnStart()
  }, []);

  const privateView = (component: JSX.Element) => props.isLoggedIn ? component : (<Redirect to="/login" />)

  return (
    <Switch>
      <Route exact path="/">{privateView(<Start />)}</Route>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

const mapStateToProps = (state: IState) => {
  return { 
      isLoggedIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps)(App)
