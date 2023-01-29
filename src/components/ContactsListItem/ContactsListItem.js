import css from './ContactsListItem.module.css';
import PropsTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactAsyncThunk } from 'redux/contacts.thunk';

const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContactAsyncThunk(id));
  };

  return (
    <li>
      {contact.name}: {contact.phone}
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propsTypes = {
  contact: PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    name: PropsTypes.string.isRequired,
    number: PropsTypes.string.isRequired,
  }).isRequired,
};
export default ContactsListItem;
