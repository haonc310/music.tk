import axiosClient from './axios-client';

const favoriteAPI = {
  getFavorite(params: any): Promise<any> {
    const url = 'music/favorite';
    return axiosClient.get(url, { params });
  },
};
export default favoriteAPI;
