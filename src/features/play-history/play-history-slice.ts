import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { getPlayHistory, postPlayHistory } from './patch-api';

const initialStatePlayList = {
  data: [],
  pagination: {
    _total: 0,
    _page: 1,
  },
  loading: false,
};

const PlayHistorySlice = createSlice({
  name: 'playHistory',
  initialState: initialStatePlayList,
  reducers: {
    // onLogOutRemoveData: (state) => {
    //   state.data = [];
    //   state.pagination = {};
    // },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(postPlayHistory.fulfilled, (state, action) => {
      const { data } = action.payload;
      const index = state.data.findIndex((i: any) => i._id === data.id_music);
      if (state.pagination._total) {
        if (index > -1) state.data.splice(index, 1);
        state.data.unshift(data.music);
      }
    });
    // get play history
    builder
      .addCase(getPlayHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlayHistory.fulfilled, (state, action) => {
        const { pagination, data } = action.payload;
        state.loading = false;
        state.pagination = pagination;
        data.forEach((i: any) => {
          state.data.push(i.music);
        });
      })
      .addCase(getPlayHistory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
const { reducer, actions } = PlayHistorySlice;
// export const { onLogOutRemoveData } = actions;
export default reducer;
