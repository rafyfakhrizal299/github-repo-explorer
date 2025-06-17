import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Repo, FetchReposParams, ReposState } from './types';

const initialState: ReposState = {
  repos: [],
  loading: false,
  error: null,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

export const fetchRepos = createAsyncThunk<
  { repos: Repo[]; totalCount: number },
  FetchReposParams
>(
  'repos/fetchRepos',
  async ({ username, page = 1, perPage = 10 }) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });

    return {
      repos: response.data,
      totalCount: response.data.length,
    };
  }
);

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload.repos;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch repos';
      });
  },
});

export const { setCurrentPage } = reposSlice.actions;
export default reposSlice.reducer;