import { createSlice } from '@reduxjs/toolkit';
import { getTrending } from './patch-api';

const trendingSlice = createSlice({
  name: 'trending',
  initialState: {
    data: [],
    pagination: {},
    loading: false,
    isOpen: false,
    error: false,
    loadingComments: true,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getTrending.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getTrending.fulfilled, (state: any, action: any) => {
        const { data, pagination } = action.payload;
        state.data = data;
        state.pagination = pagination;
        state.loading = false;
      })
      .addCase(getTrending.rejected, (state: any) => {
        state.error = true;
        state.loading = false;
      });
  },
});

const { reducer } = trendingSlice;
export default reducer;
