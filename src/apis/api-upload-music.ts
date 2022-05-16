import axiosClient from './axios-client';

const uploadMusicApi = {
  getUploadMusic(params: any): Promise<any> {
    const url = 'music/get-upload';
    return axiosClient.get(url, { params });
  },
  postUploadMusic(data: any): Promise<any> {
    const url = 'music/create';
    return axiosClient.post(url, data);
  },
  editUploadMusic(data: any): Promise<any> {
    const url = 'music/edit';
    return axiosClient.put(url, data);
  },
  deleteMusic(params: any): Promise<string> {
    const url = 'music/delete-by-id';
    return axiosClient.delete(url, { params });
  },
};

export default uploadMusicApi;
