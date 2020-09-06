import React, {useState} from 'react'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'

type RegisterProps = {
  dispatch: Dispatch<Action>
}

const NewCharacter = (props: RegisterProps) => {
  const { dispatch } = props

  const [occupation, setOccupation] = useState("")
  const [charName, setCharName] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /*
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
    */
  }

  return (
    <React.Fragment>
      <h1>Add New Character</h1>
      <div>
        <form method='post' onSubmit={handleSubmit}>
          <input type='text' name='charName' value={charName} onChange={e => setCharName(e.target.value)} />
          <input type='text' name='occupation' value={occupation} onChange={e => setOccupation(e.target.value)} />
          <button type='submit'>Add New Character</button>
        </form>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(NewCharacter)
