export const selectFilteredContact = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .includes(state.contacts.filter.toLocaleLowerCase())
  );
};
