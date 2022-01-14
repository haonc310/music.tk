import { createSlice } from '@reduxjs/toolkit';
import { getNewMusic } from '.';

const NewMusicSlice = createSlice({
  name: 'new-music',
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
      .addCase(getNewMusic.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getNewMusic.fulfilled, (state: any, action: any) => {
        const { data, pagination } = action.payload;
        state.data = data;
        state.pagination = pagination;
        state.loading = false;
      })
      .addCase(getNewMusic.rejected, (state: any) => {
        state.loading = false;
        state.error = true;
      });
  },
});
const { reducer } = NewMusicSlice;
export default reducer;
