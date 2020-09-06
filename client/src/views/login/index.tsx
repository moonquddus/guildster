import React, {useState} from 'react'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'

type LoginProps = {
  dispatch: Dispatch<Action>
}

const Login = (props: LoginProps) => {
  const { dispatch } = props

  const [email, setEmail] = useState("moonquddus3@gmail.com")
  const [password, setPassword] = useState("testing")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    apiHandler.loginToAccount(email, password).then((response) => {
      if (response.success){
        dispatch(initUser({
          data: response.data
        }))
      }
      else{
        // TODO: Add some error checking here.
      }
    })
  }

  return (
    <React.Fragment>
      <h1>LOGIN SCREEN</h1>
      <div>
        <form method='post' onSubmit={handleSubmit}>
          <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(Login)
