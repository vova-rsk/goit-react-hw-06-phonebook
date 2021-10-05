const LS_DEFAULT_KEY = 'contacts';

/*function for getting contacts array from localstorage*/
export const getDataFromLocalStorage = (key = LS_DEFAULT_KEY) =>
  JSON.parse(window.localStorage.getItem(key));

/*function for setting contacts array to localstorage*/
export const setDataToLocalStorage = (contactsArr, key = LS_DEFAULT_KEY) =>
  window.localStorage.setItem(key, JSON.stringify(contactsArr));

/*function for checking the presence of a contact with the specified name*/
export const availabilityСheck = (contactsArr, name) => {
  let isAvailable = false;
  const existingСontact = contactsArr.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );

  if (existingСontact) {
    alert(`${name} is already in contacts`);
    isAvailable = true;
  }
  return isAvailable;
};
