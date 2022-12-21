import './FilterContacts.css'
import PropsTypes from 'prop-types'
const FilterContacts = ({ filter }) => {
    return (
        <>
            <p>Find contact by Name</p>
            <input className='inputFilter'
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={(event) => { filter(event.target.value) }}
            >
            </input>
        </>)
}
FilterContacts.propsTypes = {
    filter: PropsTypes.func.isRequired
}
export default FilterContacts;