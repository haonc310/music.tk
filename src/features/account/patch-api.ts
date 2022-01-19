import { createAsyncThunk } from '@reduxjs/toolkit';
import accountAPI from '../../apis/api-account';

export const login = createAsyncThunk(
  '/account/login',
  async (data: any) => {
    const response = await accountAPI.login(data);
    return response;
  }
);
export const register = createAsyncThunk(
  '/account/register',
  async (data: any) => {
    const response = await accountAPI.register(data);
    return response;
  }
);
export const getProfile = createAsyncThunk(
  '/account/profile',
  async () => {
    const response = await accountAPI.getProfile();
    return response;
  }
);

export const logout = createAsyncThunk('/account/logout', () => {
  return;
});
