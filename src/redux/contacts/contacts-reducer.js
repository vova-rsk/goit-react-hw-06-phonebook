import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { addContact, removeContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact.type]: (state, action) => [
    ...state,
    { id: uuidv4(), ...action.payload },
  ],
  [removeContact.type]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter.type]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
