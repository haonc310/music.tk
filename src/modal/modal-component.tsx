import clsx from 'clsx';
import React, { useEffect } from 'react';
import { ModalTypeEnum } from '../constants';
import { UseAccount, UseModal } from '../hooks';
import ModalAddPlayList from './modal-add-playlist';
import ModalLogin from './modal-login';
import ModalPlayList from './modal-play-list';
import ModalRegister from './modal-register';
import { ModalUploadMusic } from './modal-upload-music';
import ModalVideo from './modal-video';
import './style.scss';

const checkModal = (modalType: ModalTypeEnum) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return ModalLogin;
    case ModalTypeEnum.REGISTER:
      return ModalRegister;
    case ModalTypeEnum.VIDEO_CLIP:
      return ModalVideo;
    case ModalTypeEnum.UPLOAD_MUSIC:
      return ModalUploadMusic;
    case ModalTypeEnum.ADD_LIST_MUSIC:
      return ModalPlayList;
    case ModalTypeEnum.CREATE_LIST:
      return ModalAddPlayList;
    default:
      return null;
  }
};
const ModalComponent = () => {
  const { resultModal, toggle, handleCloseModal } = UseModal();
  const { resultAccount } = UseAccount();
  const { type, open, title } = resultModal;
  const { accessToken } = resultAccount;
  const WrapperModal: any = React.useMemo(() => checkModal(type), [type]);

  useEffect(() => {
    toggle({ type: ModalTypeEnum.NULL, title: '' });
  }, [accessToken]);

  if (!WrapperModal) return null;

  return (
    <div className={clsx('wrapper-modal', open && 'active')} onClick={handleCloseModal}>
      {<WrapperModal />}
    </div>
  );
};

export default ModalComponent;
