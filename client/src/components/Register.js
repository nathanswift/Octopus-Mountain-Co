import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import styled from 'styled-components'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '' }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, passwordConfirmation } = this.state
    const { auth: { handleRegister }, history } = this.props

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation }, history)
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  render() {
    const { email, password, passwordConfirmation } = this.state
    
    return (
      <FormContainer>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
        </form>
      </FormContainer>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}

const FormContainer = styled.div`
  display: flex !important
  width: 300px
  height: 300px
  justify-content: center !important
  align-items: center !important
`

const SubmitButton = styled.div`
  width: 100px
  height: 50px
  margin-top: 20px
  background: red
`
