import ContactItem from '../ContactItem/ContactItem';
// import css from 'components/ContactList/contactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} onClick={() => onClick(contact.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
