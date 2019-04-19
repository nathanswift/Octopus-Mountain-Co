import React from "react";
import { Form, Grid, Input, Button, Container, Header, Icon } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import { media } from "../themes/media"

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
      <>
      <FormStyle success onSubmit={this.handleSubmit}>
        <br />
        <Container>
          <p as={ContactTextStyles} style={{ textAlign: 'justify', fontWeight: 'bolder' }}>
            Leave us an email explaining your next project, or how we can help, and we’ll get back to you as soon as possible
          </p>
          <br />
          <Grid stackable>
            <Grid.Column style={{width: '90%'}}>
          <Form.Input
            placeholder="Email Address"
            name="email"
            onChange={this.handleChange}
            value={email}
            />
          <Form.TextArea
            placeholder="Message"
            name="message"
            onChange={this.handleChange}
            value={message}
            />
            </Grid.Column>
            <Grid.Column as={Btn}>
          <Button onClick={this.handleSubmit}>Send</Button>
          </Grid.Column>
        </Grid>
        </Container>
      </FormStyle>
      </>
    );
  }
}

const Btn = styled.div`
  transform: translatey(58%) !important
  ${media.phone`
    transform: translatey(0) !important
  `}
`

const FormStyle = styled(Form)`
  width: 80%
  margin-left: auto
  margin-right: auto
  padding-top: 3em !important
  font-family: Major Mono Display, monospace; !important
  z-index: -1 !important
  ${media.phone`
    width: 90%
  `}
`
const ContactTextStyles = styled.h1`
  display: flex !important
  justify-content: left
  font-family: Major Mono Display, monospace; !important
`

export default ContactForm;
