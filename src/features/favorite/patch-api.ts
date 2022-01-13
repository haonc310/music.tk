import { createAsyncThunk } from '@reduxjs/toolkit';
import favoriteAPI from '../../apis/api-favorite';

export const getFavorite = createAsyncThunk(
  'music/favorite',
  async (params: any) => {
    const response = await favoriteAPI.getFavorite(params);
    return response;
  }
);
