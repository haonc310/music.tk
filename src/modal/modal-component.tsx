import clsx from 'clsx';
import React from 'react';
import { ModalTypeEnum } from '../constants';
import { UseModal } from '../hooks';
import ModalLogin from './modal-login';
import ModalRegister from './modal-register';
import './style.scss';

const checkModal = (modalType: ModalTypeEnum) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <ModalLogin />;
    case ModalTypeEnum.REGISTER:
      return <ModalRegister />;
    default:
      return null;
  }
};
const ModalComponent = () => {
  const { resultModal, toggle, handleCloseModal } = UseModal();
  const { type, open, title } = resultModal;

  return (
    <div
      className={clsx('wrapper-modal', open && 'active')}
      onClick={handleCloseModal}
    >
      {checkModal(type)}
    </div>
  );
};

export default ModalComponent;
