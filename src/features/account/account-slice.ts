import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './patch-api';

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
      })
      .addCase(login.rejected, (state: any) => {
        state.loading = false;
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
      })
      .addCase(register.rejected, (state: any) => {
        state.loading = false;
      });
  },
});

const { actions, reducer } = accountSlice;
export const {} = actions;
export default reducer;
