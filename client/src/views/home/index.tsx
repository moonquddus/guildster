import React from 'react'
import { IState, IUser } from '../../redux/reducers'
import { connect } from 'react-redux'
import apiHandler from '../../lib/apiHandler'
import { Dispatch } from 'redux'
import { logout, Action } from '../../redux/actions'

type HomeProps = {
  dispatch: Dispatch<Action>,
  user?: IUser
}
const Home = (props: HomeProps) => {
  const { dispatch, user } = props
  console.log("USER", user)

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    apiHandler.logOutOfAccount().then(() => {
      dispatch(logout({}))
    })
  }

  const generateUserDetails = () => {
    if (user) {
      return (
        <ul>
          <li>Username: {user.name}</li>
          <li>Email Address: {user.email}</li>
        </ul>
      )
    }
    return false
  }

  const generateGuildDetails = () => {
    if (!user || !user.guild){
      return (
        <React.Fragment>
          <h2>No Guild Yet!</h2>
        </React.Fragment>
      )
    }
    return (
      <h2>{ user.guild.name }</h2>
    )
  }

  return (
    <React.Fragment>
      <h1>Home</h1>
      { generateUserDetails() }
      { generateGuildDetails() }
      <button onClick={handleLogout}>Logout</button>
    </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => {
  return { 
      user: state.user
  }
}
export default connect(mapStateToProps)(Home)
