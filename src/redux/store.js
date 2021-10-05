import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import { getDataFromLocalStorage } from '../utils/utils';

const rootReducer = combineReducers({ contacts: contactsReducer });

const getPreloadedState = () => ({
  contacts: {
    items: getDataFromLocalStorage() ?? [],
    filter: '',
  },
});

const store = createStore(
  rootReducer,
  getPreloadedState(),
  composeWithDevTools(),
);

export default store;
