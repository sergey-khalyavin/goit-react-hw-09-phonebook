import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

import errorMessage from '../../components/Notification/Notification';

const addContact = (state, action) => {
  const names = state.map(item => item.name.toLowerCase());
  const isNotUniqueContact = names.includes(
    action.payload.name.toLowerCase().trim(),
  );

  if (isNotUniqueContact) {
    errorMessage(action.payload.name);
    return state;
  } else {
    return [...state, action.payload];
  }
};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
