import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import reposReducer from '../features/repos/reposSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    repos: reposReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
