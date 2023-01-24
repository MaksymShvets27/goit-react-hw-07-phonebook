export const selectFilteredContact = state => {
  return state.filter.filter
    ? state.contacts.contacts.filter(contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(state.filter.filter.toLocaleLowerCase())
      )
    : state.contacts.contacts;
};
