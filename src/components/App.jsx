import ContactForm from './InputName/InputName';
import ContactList from './ContacstList/ContactsList';
import React from 'react';
import Filter from './FilterContacts/FilterContacts';
import './App.module.css';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
    </div>
  );
};
