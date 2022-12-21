import './ContactsList.css'
import PropsTypes from 'prop-types'
import ContactsListItem from 'components/ContactsListItem/ContactsListItem'

const ContactsList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <ContactsListItem contact={contact} deleteContact={deleteContact} />
                )
            })}
        </ul>
    )
}

ContactsList.propsTypes = {
    contacts: PropsTypes.array.isRequired,
    deleteContact: PropsTypes.func.isRequired,
}
export default ContactsList;