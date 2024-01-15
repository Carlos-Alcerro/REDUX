import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';

const persistenceMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
