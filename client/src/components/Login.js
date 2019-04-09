import React from 'react'
import { AuthConsumer } from "../providers/AuthProvider"
import { Link } from 'react-router-dom'
import { Form, Segment, Header, Image } from 'semantic-ui-react'
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
          <Image src={Background} style={{ width: '82%', height: '47em', transform: 'translate(10em, 6em)', position: 'absolute'}}/>
        <FormContainer>
          <Header textAlign='center' style={{color: 'white', letterSpacing: '1em', fontSize: '5em', transform: 'translate(-5.7em)'}} as='h1'>Om</Header>
          <Header inverted as='h3' style={{ fontSize: '1.5em', transform: 'translate(-18em)'}}>Dashboard</Header>
          <SegmentStyle centered inverted>
            <Form inverted onSubmit={this.handleSubmit} textAlign='center'>
              <FormInputStyle
                autoFocus
                required
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
                />
              <FormInputStyle
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                />
              <Form.Button type='submit' color='white' inverted>Log In</Form.Button>
            </Form>
          </SegmentStyle>
          <ScrollLock isActive={this.state.lockScroll} />
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
  height: 70em
  justify-content: center !important
  align-items: center !important
  transform: translate(14em, -20em)
`

const SubmitButton = styled.div`
  width: 5em
  height: 3em
  margin-top: 1em
  background: red
`
const SegmentStyle = styled(Segment)`
  display: flex !important
  width: 30em !important
  justifyContent: 'center'
`
const FormInputStyle = styled(Form.Input)`
  display: flex !important
  width: 25em !important 
  transform: translate(2em) !important
`
