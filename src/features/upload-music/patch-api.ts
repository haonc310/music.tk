import { createAsyncThunk } from '@reduxjs/toolkit';
import uploadMusicApi from '../../apis/api-upload-music';

export const getUploadMusic = createAsyncThunk('music/get-upload', async (params: any) => {
  const response = await uploadMusicApi.getUploadMusic(params);
  return response;
});

export const postUploadMusic = createAsyncThunk('music/create', async (data: any) => {
  console.log(data)
  const response = await uploadMusicApi.postUploadMusic(data);
  return response;
});

export const deleteMusic = createAsyncThunk('music/delete', async (params: any) => {
  const response = await uploadMusicApi.deleteMusic(params);
  return response;
});

export const editUploadMusic = createAsyncThunk('music/edit', async (data: any) => {
  const response = await uploadMusicApi.editUploadMusic(data);
  return response;
});
