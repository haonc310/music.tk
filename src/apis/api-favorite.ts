import axiosClient from './axios-client';

const favoriteAPI = {
  getFavorite(params: any): Promise<any> {
    const url = 'music/favorite';
    return axiosClient.get(url, { params });
  },
  postCreate(data: any): Promise<any> {
    const url = 'favorite/create';
    return axiosClient.post(url, data);
  },
  getFavoriteAccount(params: any): Promise<any> {
    const url = 'favorite/get-authorization-token';
    return axiosClient.get(url, { params });
  },
};
export default favoriteAPI;
