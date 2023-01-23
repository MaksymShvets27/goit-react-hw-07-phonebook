import css from './FilterContacts.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter.slice';
const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = filter => {
    dispatch(setFilter(filter));
  };
  return (
    <>
      <p>Find contact by Name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={event => {
          onFilterChange(event.target.value);
        }}
      ></input>
    </>
  );
};

export default Filter;
