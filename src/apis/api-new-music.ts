import axiosClient from './axios-client';

const NewMusicAPI = {
  getNewMusic(params: any): Promise<any> {
    const url = 'music/get-all';
    return axiosClient.get(url, { params });
  },
};
export default NewMusicAPI;
