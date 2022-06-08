import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiPlayHistory from '../../apis/api-play-history';

export const postPlayHistory = createAsyncThunk('play-history/create', async (params: any) => {
  const response = await ApiPlayHistory.postPlayHistory(params);
  return response;
});

export const getPlayHistory = createAsyncThunk('play-history/get-by-token', async (params: any) => {
  const response = await ApiPlayHistory.getPlayHistory(params);
  return response;
});

