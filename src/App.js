import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

// const useLocalStorage = () => {
//   const [contacts, setContacts] = useState(() => {
//     return (
//       JSON.parse(localStorage.getItem('contacts')) ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     );
//   });
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);
//   return [contacts, setContacts];
// };

const App = () => {
  // const [contacts, setContacts] = useLocalStorage();
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageSave = JSON.stringify(contacts);
    localStorage.setItem('contacts', localStorageSave);
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
