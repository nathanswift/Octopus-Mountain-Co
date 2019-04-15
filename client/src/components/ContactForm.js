import React from "react";
import { Form, Input, Button, Container, Header } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

class ContactForm extends React.Component {
  defaultValues = {
    email: "",
    message: ""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const contact = this.state;
    axios.post("/api/contacts", contact).then(res => {
      this.props.toggleMenu();
    });
    this.setState({ ...this.state });
  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { email, message } = this.state;
    return (
      <FormStyle success onSubmit={this.handleSubmit}>
        <br />
        <Container style={{width: '55%'}}>
          <h1 as={ContactTextStyles}>Leave us an email explaining your next project, or how we can help, and we’ll get back to you as soon as possible</h1>
          <Form.Input
            label="Email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            />
          <Form.TextArea
            label="Message"
            placeholder="message"
            name="message"
            onChange={this.handleChange}
            value={message}
            />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Container>
      </FormStyle>
    );
  }
}

const FormStyle = styled(Form)`
  padding-left: 2.7em !important
  padding-top: 2em !important
  font-family: Major Mono Display, monospace; !important
  z-index: -1 !important
`
const ContactTextStyles = styled.h1`
  display: flex !important
  justify-content: left
  font-family: Major Mono Display, monospace; !important
`

export default ContactForm;
