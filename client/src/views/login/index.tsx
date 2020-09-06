import React, {useState} from 'react'
import styled from 'styled-components'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  return (
    <React.Fragment>
      <h1>LOGIN SCREEN</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </React.Fragment>
  )
}
export default Login
