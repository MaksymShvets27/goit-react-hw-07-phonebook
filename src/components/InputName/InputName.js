import React from 'react'
import './InputName.css'

class InputName extends React.Component {
    state = {
        currentContactName: '',
        currentContactNumber: ''
    }

    onAddContactSubmit = (event) => {
        event.preventDefault()
        return this.props.addContact(this.state.currentContactName, this.state.currentContactNumber)
    }
    render() {
        return (
            <form className='formAddContact'>
                <h3>New Contact</h3>

                <label className='labelAddContact'>
                    <p>Name</p>
                    <input
                        className='inputAdd'
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={(event) => this.setState({ currentContactName: event.target.value })}
                    />
                </label>
                <label className='labelAddContact'>
                    <p>Number</p>
                    <input
                        className='inputAdd'
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={(event) => this.setState({ currentContactNumber: event.target.value })}
                    />
                </label>
                <button className='btnAddContact' type='submit' onClick={this.onAddContactSubmit}>Add Contact</button>
            </form>
        )
    }
}

export default InputName;