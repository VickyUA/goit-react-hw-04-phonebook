// import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

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
        margin: '0 auto',
      }}
    >
      <Form getSubmitData={formSubmitHandler} />
      <div className={css.contactss}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList contacts={filteredContacts} onClick={deleteContact} />
      </div>
    </div>
  );
}

// import { Component } from 'react';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import css from './app.module.css';

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   formSubmitHandler = ({ name, number }) => {
//     const newContact = { name, number, id: nanoid() };

//     const nameExists = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (nameExists) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
//     }
//   };

//   handleFilter = event => {
//     this.setState({ filter: event.target.value });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           margin: '0 auto',
//         }}
//       >
//         <Form getSubmitData={this.formSubmitHandler} />
//         <div className={css.contactss}>
//           <h2>Contacts</h2>
//           <Filter value={this.state.filter} onChange={this.handleFilter} />
//           <ContactList
//             contacts={filteredContacts}
//             onClick={this.deleteContact}
//           />
//         </div>
//       </div>
//     );
//   }
// }
