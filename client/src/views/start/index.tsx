import React from 'react'
import { Redirect } from "react-router-dom"
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'

type StartProps = {
  preflightComplete: boolean
}
const Start = (props: StartProps) => (
  <React.Fragment>
    { props.preflightComplete ? <Redirect to="/home" /> : <></> }
    <h1>Loading...</h1>
  </React.Fragment>
)
const mapStateToProps = (state: IState) => {
  return { 
      preflightComplete: state.preflightComplete
  }
}
export default connect(mapStateToProps)(Start)
