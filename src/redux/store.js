import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contact.slice';
import filterReducer from './filter.slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware();
  },
});

export { store };
