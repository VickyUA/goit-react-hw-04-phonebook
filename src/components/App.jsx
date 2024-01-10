import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
