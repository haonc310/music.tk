import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { createFavorite, getFavorite } from './patch-api';

const favoriteAccountSlice = createSlice({
  name: 'favorite-account',
  initialState: {},
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(createFavorite.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(createFavorite.fulfilled, (state: any) => {
        state.loading = false;
        notification.success({
          message: 'Đã thêm vào danh sách yêu thích',
          placement: 'topLeft',
        });
      })
      .addCase(createFavorite.rejected, (state: any) => {
        state.loading = false;
        notification.error({
          message: 'Vui lòng thử lại sao!',
          placement: 'topLeft',
        });
      });
    builder
      .addCase(getFavorite.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getFavorite.fulfilled, (state: any, action: any) => {
        const { data, pagination } = action.payload;
        state.loading = false;
        state.data = data;
        state.pagination = pagination;
      })
      .addCase(getFavorite.rejected, (state: any) => {
        state.loading = false;
        notification.error({
          message: 'Vui lòng thử lại sao!',
          placement: 'topLeft',
        });
        state.error = true;
      });
  },
});

const { reducer } = favoriteAccountSlice;
export default reducer;
