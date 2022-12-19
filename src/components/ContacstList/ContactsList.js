import './ContactsList.css'
import React from 'react'
import PropsTypes from 'prop-types'

class ContactsList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.contacts.map((contact) => {
                    return (
                        <li key={contact.id}> * {contact.name}: {contact.number}  <button className='deleteButton' type="button" onClick={() => { this.props.deleteContact(contact.id) }}>Delete</button></li>

                    )
                })}
            </ul>
        )
    }
}
ContactsList.propsTypes = {
    contacts: {
        id: PropsTypes.number.isRequired,
        name: PropsTypes.string.isRequired,
        number: PropsTypes.string.isRequired
    }.isRequired,
    deleteContact: PropsTypes.func.isRequired,
}
export default ContactsList;