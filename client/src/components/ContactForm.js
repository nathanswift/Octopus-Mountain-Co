import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'

class ContactForm extends React.Component {

  render () {
    return(
      <FormStyle success>
          <br />
          <h6 style={{ fontSize: '1em'}}> Email us </h6>
          <h4> octopusmountainco@gmail.com </h4>
          <h5>Or leave us a message!</h5>
          <Form.Input label='Email' placeholder='johndoe@gmail.com' />
          <Form.TextArea label='Message' placeholder='How can we help?' />
          <Button>Submit</Button>
        </FormStyle>
    )
  }
}

const FormStyle = styled(Form)`
  padding-left: 2.7em !important
  padding-top: 2em !important
  z-index: -1 !important
`

export default ContactForm