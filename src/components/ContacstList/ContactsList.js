import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return <ContactsListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
