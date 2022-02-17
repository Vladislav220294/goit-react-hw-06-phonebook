import { createAction } from '@reduxjs/toolkit';

// const addContact = newContact => ({
//   type: 'contacts/add',
//   payload: newContact,
// });
// const removeContact = id => ({
//   type: 'contacts/delete',
//   payload: id,
// });

// const filterContacts = value => ({
//   type: 'contacts/filter',
//   payload: value,
// });
const filterContacts = createAction('contacts/filter');
const removeContact = createAction('contacts/delete');
const addContact = createAction('contacts/add');
export default { addContact, removeContact, filterContacts };
