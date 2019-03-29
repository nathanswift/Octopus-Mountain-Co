import React from 'react'
import { AuthConsumer } from "../providers/AuthProvider"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Login extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.auth.handleLogin({ email, password }, this.props.history)
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
  
    return (
      <FormContainer style={{display: 'flex !important'}}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            label="Email"
            autoFocus
            required         
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
          <SubmitButton onClick={this.handleSubmit} class="btn" type='submit'>Submit</SubmitButton>
          <Link to='/Register'>
            <div class="btn">Register</div>
          </Link>
        </form>
      </FormContainer>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const FormContainer = styled.div`
  display: flex !important
  width: 500px
  height: 700px
  justify-content: center !important
  align-items: center !important
`

const SubmitButton = styled.div`
  width: 100px
  height: 50px
  margin-top: 20px
  background: red
`
