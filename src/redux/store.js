import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import { getDataFromLocalStorage } from '../utils/utils';

const getPreloadedState = () => ({
  contacts: {
    items: getDataFromLocalStorage() ?? [],
    filter: '',
  },
});

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: true,
  preloadedState: getPreloadedState(),
});

export default store;
