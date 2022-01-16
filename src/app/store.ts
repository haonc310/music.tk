import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modal-slice';
import favoriteReducer from '../features/favorite/favorite-slice';
import trendingReducer from '../features/trending/trending-slice';
import newMusicReducer from '../features/new-musci/new-music-slice';
import musicReducer from '../features/music/music-slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    favorite: favoriteReducer,
    trending: trendingReducer,
    newMusic: newMusicReducer,
    music: musicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
