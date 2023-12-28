import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    const nameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    }
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '500px',
          margin: '0 auto',
        }}
      >
        <Form getSubmitData={this.formSubmitHandler} />
        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handleFilter} />
          <ContactList
            contacts={filteredContacts}
            onClick={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
