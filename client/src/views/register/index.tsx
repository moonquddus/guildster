import React, {useState} from 'react'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'

type RegisterProps = {
  dispatch: Dispatch<Action>
}

const Register = (props: RegisterProps) => {
  const { dispatch } = props

  const [email, setEmail] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [password, setPassword] = useState("")
  const [guild, setGuild] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    apiHandler.registerAccount(email, password, displayName, guild).then((response) => {
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
      <h1>REGISTER NEW ACCOUNT</h1>
      <div>
        <form method='post' onSubmit={handleSubmit}>
          <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
          <input type='text' name='displayName' value={displayName} onChange={e => setDisplayName(e.target.value)} />
          <input type='text' name='guild' value={guild} onChange={e => setGuild(e.target.value)} />
          <button type='submit'>Register</button>
        </form>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(Register)
