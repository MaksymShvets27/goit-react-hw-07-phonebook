import InputName from "./InputName/InputName";
import ContactsList from "./ContacstList/ContactsList";
import { nanoid } from "nanoid";
import React from "react";
import FilterContacts from "./FilterContacts/FilterContacts";
import './App.css'

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      filter: '',
    }
  }
  AddContact = (name, number) => {
    let check = true;
    this.state.contacts.forEach((contact) => {
      if (contact.name === name) {
        alert(`${name} is already in contacts!`);
        check = false
      }
    })
    if(check === true){
    return this.setState({ contacts: [ ...this.state.contacts, { id:nanoid(), name: name, number: number} ] })
      }
    // })

  }
  AddFilter = (filter) => {
    return this.setState({filter: filter})
  }
  
  filtredContacts = () => {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();

    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return filtredContacts;
  };
  
  DeleteContact = (id) => {this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
}

  render() {
  return (
    <div>
      <h1>Phonebook</h1>
      <InputName addContact={this.AddContact}></InputName>
  <h2>Contacts</h2>
        <FilterContacts filter={this.AddFilter}></FilterContacts>
    <ContactsList contacts={this.filtredContacts()} deleteContact={this.DeleteContact}></ContactsList>

    </div>
    );
    }
};
