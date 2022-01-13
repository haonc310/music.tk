import { createAsyncThunk } from '@reduxjs/toolkit';
import trendingAPI from '../../apis/api-trending';

export const getTrending = createAsyncThunk(
  'music/trending',
  async (params: any) => {
    const response = await trendingAPI.getTrending(params);
    return response;
  }
);
