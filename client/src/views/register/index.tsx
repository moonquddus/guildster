import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../lib/types'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import components from '../../components'

const SignIn = styled.p`
  text-align: center;
  margin: -30px 0px 30px;
  font-size: 14px;
`;

type FormValues = {
  email: string
  displayName: string
  password: string
  guild: string
};

type RegisterProps = {
  dispatch: Dispatch<Action>
}

const Register = (props: RegisterProps) => {
  const { dispatch } = props
  const { Card, Input, FormContainer, ActionBar, AppHeader, Button, FloatingLabel, Label, FormError} = components
  const { handleSubmit, register, errors } = useForm()

  const onSubmit: SubmitHandler<FormValues> = data => {
    const { email, password, displayName, guild } = data
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
      <SignIn><Link to='/login'>(I already have an account)</Link></SignIn>
      <FormContainer>
        <form method='post' onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel>
            <Input type='email' name='email' placeholder='Email' ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })} />
            <Label htmlFor=''>Email:</Label>
            <FormError>{ errors.email && errors.email.message }</FormError>
          </FloatingLabel>

          <FloatingLabel>
            <Input type='password' name='password' placeholder='Password' ref={register({
              required: 'Required',
              minLength: {
                value: 7,
                message: 'Password needs to be at least 7 chars'
              }
            })} />
            <Label htmlFor=''>Password:</Label>
            <FormError>{ errors.password && errors.password.message }</FormError>
          </FloatingLabel>

          <FloatingLabel>
            <Input type='text' name='displayName' placeholder='Display Name' ref={register({
              required: 'Required'
            })} />
            <Label htmlFor=''>Display Name:</Label>
            <FormError>{ errors.displayName && errors.displayName.message }</FormError>
          </FloatingLabel>

          <FloatingLabel>
            <Input type='text' name='guild' placeholder='Guild' ref={register({
              required: 'Required'
            })} />
            <Label htmlFor=''>Guild:</Label>
            <FormError>{ errors.guild && errors.guild.message }</FormError>
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
