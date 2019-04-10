import React, { Component } from "react";
import axios from "axios";
import { Table, Container, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ContactList extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    axios
      .get("/api/contacts")
      .then(res => this.setState({ contacts: res.data }));
  }

  handleDelete = id => {
    axios.delete(`/api/contacts/${id}`).then(res => {
      const { contacts } = this.state;
      this.setState({ contacts: contacts.filter(t => t.id !== id) });
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Container>
          <Table style={{ position: "relative", marginBottom: "5em" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Message</Table.HeaderCell>
                <Table.HeaderCell>Contacted?</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {contacts.map(contact => (
                <Table.Row key={contact.id}>
                  <Link to={`/contacts/${contact.id}`}>
                    <Table.Cell>{contact.email}</Table.Cell>
                  </Link>
                  <Table.Cell>{contact.message}</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>
                    <Button inverted color="red" onClick={this.handleDelete}>
                      <Icon name="trash" />
                      Delete Item
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </>
    );
  }
}
