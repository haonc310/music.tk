import { createAsyncThunk } from '@reduxjs/toolkit';
import NewMusicAPI from '../../apis/api-new-music';

export const getNewMusic = createAsyncThunk(
  'music/get-all',
  async (params: any) => {
    const response = await NewMusicAPI.getNewMusic(params);
    return response;
  }
);
