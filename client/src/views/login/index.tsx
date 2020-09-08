import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
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

type LoginProps = {
  dispatch: Dispatch<Action>
}

const CreateAccount = styled.p`
  text-align: center;
  margin: -30px 0px 30px;
  font-size: 14px;
`;

const Login = (props: LoginProps) => {
  const { dispatch } = props

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
    <Card theme={{width: '400px'}}>
      <AppHeader>Sign In To Your Account</AppHeader>
      <CreateAccount><Link to="/register">(I don't have an account)</Link></CreateAccount>
      <FormContainer>
        <form method='post' onSubmit={handleSubmit} autoComplete='off'>
          <FloatingLabel>
            <Input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <Label htmlFor='email'>Email:</Label>
          </FloatingLabel>
          <FloatingLabel>
            <Input type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <Label htmlFor='password'>Password:</Label>
          </FloatingLabel>
          <ActionBar>
            <Button type='submit'>Sign In</Button>
          </ActionBar>
        </form>
      </FormContainer>
    </Card>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(Login)
