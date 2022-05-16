import { RootState } from '../app/store';

export const modalStore = (state: RootState) => state.modal;
export const favoriteStore = (state: RootState) => state.favorite;
export const trendingStore = (state: RootState) => state.trending;
export const newMusicStore = (state: RootState) => state.newMusic;
export const musicStore = (state: RootState) => state.music;
export const playlistStore = (state: RootState) => state.playlist;
export const toggleStore = (state: RootState) => state.toggle;
export const accountStore = (state: RootState) => state.account;
export const favoriteAccountStore = (state: RootState) => state.favoriteAccount;
export const historyStore = (state: RootState) => state.historyStore;
export const uploadMusicStore = (state: RootState) => state.uploadMusicStore;
