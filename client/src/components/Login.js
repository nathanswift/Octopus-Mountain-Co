import React from 'react'
import { AuthConsumer } from "../providers/AuthProvider"
import { Link } from 'react-router-dom'
import { Form, Segment, Header, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'
import Background from '../assets/images/AltaMap.png'
import ScrollLock from 'react-scrolllock'

class Login extends React.Component {
  state = { email: '', password: '', lockScroll: true }

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
      <div>
          <Image src={Background} style={{ width: '100%', height: 'auto', position: 'absolute'}}/>

        <FormContainer>
          <CardStyle>
              <Form inverted onSubmit={this.handleSubmit} textAlign='center' style={{ marginTop: '2em'}}>
                <FormInputStyles
                  autoFocus
                  required
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                  />
                <FormInputStyles style={{ transform: 'translate(0, -3em)'}}
                  required
                  name='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  />
                <Form.Button type='submit' color='white' inverted style={{ transform: 'translate(1.5em, -2em)'}}>Log In</Form.Button>
              </Form>
          <ScrollLock isActive={this.state.lockScroll} />
          </CardStyle>
        </FormContainer>
      </div>

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
  height: 50em
  justify-content: center !important
  align-items: center !important
`

const CardStyle = styled(Card)`
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8oa0MKKgXhbw2zPtNcdDJkDmg5D_crzpHZgoChysAhxfaQo7') !important
  height: 40%
`
const FormInputStyles = styled(Form.Input)`
  display: flex !important
  width: 100%
  height: 60%
  justify-content: center !important
  align-items: center !important
  padding-left: 1em
  padding-right: 1em
`
