import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersState } from './types';

const initialState: UsersState = {
  users: [],
  userProfile: null,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (query: string) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items.slice(0, 5);
  }
);
export const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      });
  },
});

export default usersSlice.reducer;
