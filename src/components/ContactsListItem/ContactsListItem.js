import './ContactsListItem.css'
import PropsTypes from 'prop-types'

const ContactsListItem = ({ contact, deleteContact }) => {
    return (
        <li key={contact.id}> * {contact.name}: {contact.number}  <button className='deleteButton' type="button" onClick={() => { deleteContact(contact.id) }}>Delete</button></li>

    )
}

ContactsListItem.propsTypes = {
    contact: {
        id: PropsTypes.number.isRequired,
        name: PropsTypes.string.isRequired,
        number: PropsTypes.string.isRequired
    }.isRequired,
    deleteContact: PropsTypes.func.isRequired,
}
export default ContactsListItem;