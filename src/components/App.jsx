import ContactForm from './InputName/InputName';
import ContactList from './ContacstList/ContactsList';
import React, { useEffect } from 'react';
import Filter from './FilterContacts/FilterContacts';
import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsAsyncThunk } from 'redux/contacts.thunk';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const error = useSelector(state => state.contacts.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList></ContactList>
    </div>
  );
};
