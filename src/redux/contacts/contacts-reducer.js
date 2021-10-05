import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import actionTypes from './counter-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.CONTACT_ADD:
      return [...state, { id: uuidv4(), ...payload }];

    case actionTypes.CONTACT_REMOVE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  if (type === actionTypes.FILTER_CHANGE) {
    return payload;
  }
  return state;
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
