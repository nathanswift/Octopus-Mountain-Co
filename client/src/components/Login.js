import React from 'react'
import { AuthConsumer } from "../providers/AuthProvider"
import { Link } from 'react-router-dom'
import { Form, Segment, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import Background from '../assets/images/AltaMap.png'

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
      <FormContainer>
        <Header textAlign='center' style={{color: 'white', letterSpacing: '2em', marginRight: '-1.5em', fontSize: '5em'}} as='h1'>Om</Header>
        <Segment centered inverted style={{display: 'flex', justifyContent: 'center', marginTop: '-10em', marginRight: '10em'}} textAlign='center'>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input
              label='Email'
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
              />
            <Form.Input
              label='Password'
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
              />
            <Form.Button type='submit' color='white' inverted>Log In</Form.Button>
          </Form>
        </Segment>
      </FormContainer>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const FormContainer = styled.div`
  display: flex !important
  width: 100%
  height: 70em
  justify-content: center !important
  align-items: center !important
  background-image: url(${Background})
`

const SubmitButton = styled.div`
  width: 5em
  height: 3em
  margin-top: 1em
  background: red
`
