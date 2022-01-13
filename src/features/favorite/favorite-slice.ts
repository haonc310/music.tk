import { createSlice } from '@reduxjs/toolkit';
import { getFavorite } from './patch-api';

const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    data: [],
    pagination: {},
    loading: true,
    isOpen: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getFavorite.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getFavorite.fulfilled, (state: any, action: any) => {
        const { data, pagination } = action.payload;
        state.data = data;
        state.pagination = pagination;
        state.loading = false;
      })
      .addCase(getFavorite.rejected, (state: any) => {
        state.loading = false;
        state.error = true;
      });
  },
});

const { reducer } = FavoriteSlice;
export default reducer;
