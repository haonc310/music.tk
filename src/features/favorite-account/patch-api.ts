import { createAsyncThunk } from '@reduxjs/toolkit';
import favoriteAPI from '../../apis/api-favorite';

export const createFavorite = createAsyncThunk('create/create', async (data: any) => {
  const response = await favoriteAPI.postCreate(data);
  return response;
});

export const getFavorite = createAsyncThunk(
  'favorite/get-authorization-token',
  async (data: any) => {
    const response = await favoriteAPI.getFavoriteAccount(data);
    return response;
  }
);
