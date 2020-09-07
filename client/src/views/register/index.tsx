import React, {useState} from 'react'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'
import Input from '../../components/input'
import FormContainer from '../../components/formContainer'
import ActionBar from '../../components/actionBar'
import AppHeader from '../../components/appHeader'
import Card from '../../components/card'
import Button from '../../components/button'
import FloatingLabel from '../../components/floatingLabel'
import Label from '../../components/label'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type RegisterProps = {
  dispatch: Dispatch<Action>
}

const SignIn = styled.p`
  text-align: center;
  margin: -30px 0px 30px;
  font-size: 14px;
`;

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
    <Card theme={{width: '400px'}}>
      <AppHeader>Register New Account</AppHeader>
      <SignIn><Link to="/login">(I already have an account)</Link></SignIn>
      <FormContainer>
        <form method='post' onSubmit={handleSubmit}>
          <FloatingLabel>
            <Input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <Label htmlFor=''>Email:</Label>
          </FloatingLabel>
          <FloatingLabel>
            <Input type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <Label htmlFor=''>Password:</Label>
          </FloatingLabel>
          <FloatingLabel>
            <Input type='text' name='displayName' placeholder='Display Name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
            <Label htmlFor=''>Display Name:</Label>
          </FloatingLabel>
          <FloatingLabel>
            <Input type='text' name='guild' placeholder='Guild' value={guild} onChange={e => setGuild(e.target.value)} />
            <Label htmlFor=''>Guild:</Label>
          </FloatingLabel>
          <ActionBar>
            <Button type='submit'>Sign Up</Button>
          </ActionBar>
        </form>
      </FormContainer>
    </Card>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(Register)
