import axiosClient from './axios-client';

const ApiPlayHistory = {
  postPlayHistory(data: any): Promise<any> {
    return axiosClient.post('play-history/create', data);
  },
  getPlayHistory(params: any): Promise<any> {
    return axiosClient.get('play-history/get-by-token', { params });
  },
};
export default ApiPlayHistory;
