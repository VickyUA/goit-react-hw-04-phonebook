import css from 'components/ContactItem/contactItem.module.css';

const ContactItem = ({ contact, onClick }) => {
  return (
    <>
      {contact.name}: {contact.number}
      <button className={css.deleteBtn} onClick={onClick}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;
