import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    isOpen: false,
  },
  reducers: {
    onOpenPlaylist: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

const { actions, reducer } = playlistSlice;

export const { onOpenPlaylist } = actions;
export default reducer;
