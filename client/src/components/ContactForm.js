import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
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
        <h6 style={{ fontSize: "1em" }}> Email us </h6>
        <h4> octopusmountainco@gmail.com </h4>
        <h5>Or leave us a message!</h5>
        <Form.Input
          label="Email"
          placeholder="johndoe@gmail.com"
          name="email"
          onChange={this.handleChange}
          value={email}
        />
        <Form.TextArea
          label="Message"
          placeholder="How can we help?"
          name="message"
          onChange={this.handleChange}
          value={message}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </FormStyle>
    );
  }
}

const FormStyle = styled(Form)`
  padding-left: 2.7em !important
  padding-top: 2em !important
  z-index: -1 !important
`;

export default ContactForm;
