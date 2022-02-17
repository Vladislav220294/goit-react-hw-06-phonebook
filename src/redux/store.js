import { createStore } from 'redux';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReduer from './reducer';

// const persistConfig = {
//   key: 'phoneBook',
//   storage,
// };
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReduer),
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { contacts: contactsReduer },
});
// const persistor = persistStore(store);

export default store;
