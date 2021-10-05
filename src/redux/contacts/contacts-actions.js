import actionTypes from './counter-types';

export const addContact = contact => ({
  type: actionTypes.CONTACT_ADD,
  payload: contact,
});

export const removeContact = id => ({
  type: actionTypes.CONTACT_REMOVE,
  payload: id,
});

export const changeFilter = filter => ({
  type: actionTypes.FILTER_CHANGE,
  payload: filter,
});
