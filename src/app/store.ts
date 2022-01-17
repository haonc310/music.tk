import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorite/favorite-slice';
import modalReducer from '../features/modal/modal-slice';
import musicReducer from '../features/music/music-slice';
import newMusicReducer from '../features/new-musci/new-music-slice';
import playlistReducer from '../features/playlist/playlistSlice';
import toggleReducer from '../features/toggle/toggleSlice';
import trendingReducer from '../features/trending/trending-slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    favorite: favoriteReducer,
    trending: trendingReducer,
    newMusic: newMusicReducer,
    music: musicReducer,
    playlist: playlistReducer,
    toggle: toggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
