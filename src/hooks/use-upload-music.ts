import { message, notification } from 'antd';
import React from 'react';
import { postUploadMusic } from '../features/upload-music';
import { UseModal } from './use-modal';
import { useAppDispatch, useAppSelector, uploadMusicStore } from './index';
const accessTokenLocal = localStorage.getItem('accessToken');
export const useUploadMusic = () => {
  const dispatch = useAppDispatch();
  const resultMusicUpload = useAppSelector(uploadMusicStore);
  const [newImage, setNewImage] = React.useState<boolean>(false);
  const [newAudio, setNewAudio] = React.useState<boolean>(false);
  const { resultModal } = UseModal();

  const {loadingUploadMusic } = resultMusicUpload;

  console.log(resultMusicUpload)

  const { others } = resultModal;

  const handlePostSourceMusic = React.useCallback(
    (data: any) => accessTokenLocal && dispatch(postUploadMusic(data)),
    [dispatch, accessTokenLocal]
  );

  const handleUploadMusicImage = (f: any) => {
    const { file, fileList } = f;
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJpgOrPng) message.error('Bạn chỉ có thể tải lên tệp JPG / PNG / JPEG!');
    if (!isLt2M) message.error('Hình ảnh phải nhỏ hơn 2MB !');
    if (!fileList.length) setNewImage(false);
    if (fileList.length) setNewImage(true);
    if (isJpgOrPng && isLt2M) return f && fileList;
  };
  const handleUploadMusicSource = (f: any) => {
    const { file, fileList } = f;
    const isTypeMusic = file.type === 'audio/mpeg';
    if (!isTypeMusic) message.error('Bạn chỉ có thể tải lên tệp MP3!');
    if (!fileList.length) setNewAudio(false);
    if (fileList.length) setNewAudio(true);
    if (isTypeMusic) return f && fileList;
  };
  const handlePostUploadMusic = async (value: any) => {
    if (value) {
      // const formData = new FormData();
      const { category,  link_mv,  name_singer } = value;
      const data = { category, link_mv,  name_singer, _id: others?._id };
      // formData.append('image_music', image_music[0].originFileObj);
      // formData.append('src_music', src_music[0].originFileObj);
      // formData.append('upload', JSON.stringify(data));
      const youtube = link_mv.split('/');
      if (youtube.length === 4) {
        handlePostSourceMusic(data);
      } else
        notification['error']({
          message: 'Thông Báo',
          description: 'Link MV không hợp lệ!',
        });
    }
  };

  return { newImage, handleUploadMusicImage, handlePostUploadMusic, handleUploadMusicSource , loadingUploadMusic};
};
