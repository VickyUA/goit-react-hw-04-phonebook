import ContactItem from '../ContactItem/ContactItem';
import css from 'components/ContactList/contactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={css.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem
              contact={contact}
              onClick={() => onClick(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
