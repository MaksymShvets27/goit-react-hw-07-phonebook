import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_API } from 'constants/API';

export const contactsAsyncThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL_API + '/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContactAsyncThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post(BASE_URL_API + '/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContactAsyncThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        BASE_URL_API + `/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// import {
//   contactsErrorAction,
//   contactsLoadingAction,
//   contactsSuccessAction,
// } from './contact.slice';

// export const contactsAsyncThunk = async dispatch => {
//   dispatch(contactsLoadingAction());
//   try {
//     const { data } = await axios.get(BASE_URL_API + '/contacts');
//     dispatch(contactsSuccessAction(data));
//   } catch {
//     dispatch(contactsErrorAction());
//   }
// };
