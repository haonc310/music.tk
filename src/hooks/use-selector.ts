import { RootState } from '../app/store';

export const modalStore = (state: RootState) => state.modal;
export const favoriteStore = (state: RootState) => state.favorite;
export const trendingStore = (state: RootState) => state.trending;
export const newMusicStore = (state: RootState) => state.newMusic;
