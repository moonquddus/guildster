import React, { useEffect, Dispatch } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import apiHandler from './lib/apiHandler'
import Start from './views/start'
import Login from './views/login'
import Home from './views/home'
import { IState } from './redux/reducers'
import { initUser, logout, preflightFinished, Action } from './redux/actions'

type AppProps = {
  isLoggedIn: boolean,
  preflightComplete: boolean,
  dispatch: Dispatch<Action>
}

const App = (props: AppProps) => {
const { dispatch } = props
  useEffect(() => {
    apiHandler.loadCsrfToken()
    apiHandler.getUserOnStart().then(response => {
      if (response.success){
        dispatch(initUser({
          data: response.data
        }))
      }
      else{
        dispatch(logout({}))
      }
      dispatch(preflightFinished({}))
    })
  }, [dispatch]);

  const notAuthorized = () => props.preflightComplete && !props.isLoggedIn
  const privateView = (component: JSX.Element) => notAuthorized() ? (<Redirect to="/login" />) : component

  return (
    <Switch>
      <Route exact path="/">{privateView(<Start />)}</Route>
      <Route path="/login">{props.isLoggedIn ? <Redirect to='/home' /> : <Login />}</Route>
      <Route path="/home">{privateView(<Home />)}</Route>
    </Switch>
  );
}

const mapStateToProps = (state: IState) => {
  return { 
      isLoggedIn: state.isLoggedIn,
      preflightComplete: state.preflightComplete
  }
}
export default connect(mapStateToProps)(App)
