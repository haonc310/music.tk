import axiosClient from './axios-client';

const accountAPI = {
  login: (data: any): Promise<any> => {
    const url = 'account/login';
    return axiosClient.post(url, data);
  },
  register: (data: any): Promise<any> => {
    const url = 'account/register';
    return axiosClient.post(url, data);
  },
  getProfile(): Promise<any> {
    const url = 'account/profile';
    return axiosClient.get(url);
  },
};
export default accountAPI;
