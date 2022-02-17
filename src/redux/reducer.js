import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [contactsActions.addContact]: (state, { payload }) => [...state, payload],
    [contactsActions.removeContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  }
);

// const items = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case 'contacts/add':
//       return [...state, payload];
//     case 'contacts/delete':
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contacts/filter':
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
