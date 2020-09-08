import React from 'react'
import { Redirect } from 'react-router-dom'
import { IState } from '../../lib/types'
import { connect } from 'react-redux'
import Card from '../../components/card'
import AppHeader from '../../components/appHeader'

type StartProps = {
  preflightComplete: boolean
}
const Start = (props: StartProps) => 
  <Card theme={{width: '400px'}}>
    { props.preflightComplete ? <Redirect to='/home' /> : <></> }
    <AppHeader>Connecting to server...</AppHeader>
  </Card>

const mapStateToProps = (state: IState) => {
  return { 
    preflightComplete: state.preflightComplete
  }
}
export default connect(mapStateToProps)(Start)
