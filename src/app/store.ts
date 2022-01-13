import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modal-slice';
import favoriteReducer from '../features/favorite/favorite-slice';
import trendingReducer from '../features/trending/trending-slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    favorite: favoriteReducer,
    trending: trendingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
