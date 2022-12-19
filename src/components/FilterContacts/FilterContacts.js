import React from "react";
import './FilterContacts.css'

class FilterContacts extends React.Component {

    render() {
        return (
            <>
                <p>Find contact by Name</p>
                <input className='inputFilter'
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={(event) => { this.props.filter(event.target.value) }}
                >
                </input>
            </>)
    }
}

export default FilterContacts;