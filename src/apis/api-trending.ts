import axiosClient from './axios-client';

const trendingAPI = {
  getTrending(params: any): Promise<any> {
    const url = 'music/trending';
    return axiosClient.get(url, { params });
  },
};
export default trendingAPI;
