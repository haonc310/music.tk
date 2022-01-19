import { createSlice } from '@reduxjs/toolkit';
import { getProfile, login, register } from './patch-api';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: {},
    loading: false,
    loadingGoogle: false,
    accessToken: '',
    error: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(login.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        const { data, accessToken } = action.payload;
        state.data = data;
        state.accessToken = accessToken;
        state.loading = false;
        localStorage.setItem('accessToken', accessToken);
        // notification.success({
        //   message: 'Lỗi',
        // });
        // notification.success({
        //   message: 'Đăng nhập thành công',
        // });
      })
      .addCase(login.rejected, (state: any) => {
        state.loading = false;
        // notification.error({
        //   message: 'Đăng nhập thất bại',
        // });
      });

    builder
      .addCase(register.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state: any, action: any) => {
        const { data, accessToken } = action.payload;
        state.data = data;
        state.accessToken = accessToken;
        state.loading = false;
        localStorage.setItem('accessToken', accessToken);
        // notification.success({
        //   message: 'Đăng ký thành công',
        // });
      })
      .addCase(register.rejected, (state: any) => {
        state.loading = false;
        // notification.error({
        //   message: 'Tài khoản này đã tồn tại!',
        // });
      });
    builder
      .addCase(getProfile.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state: any, action: any) => {
        const { data, accessToken } = action.payload;
        state.loading = false;
        state.data = data;
        state.accessToken = accessToken;
      })
      .addCase(getProfile.rejected, (state: any) => {
        state.loading = false;
        state.accessToken = '';
        localStorage.removeItem('accessToken');
      });
  },
});

const { actions, reducer } = accountSlice;
export const {} = actions;
export default reducer;
