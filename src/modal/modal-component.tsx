import clsx from 'clsx';
import React, { useEffect } from 'react';
import { ModalTypeEnum } from '../constants';
import { UseAccount, UseModal } from '../hooks';
import ModalLogin from './modal-login';
import ModalRegister from './modal-register';
import './style.scss';

const checkModal = (modalType: ModalTypeEnum) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return ModalLogin;
    case ModalTypeEnum.REGISTER:
      return ModalRegister;
    default:
      return null;
  }
};
const ModalComponent = () => {
  const { resultModal, toggle, handleCloseModal } = UseModal();
  const { resultAccount } = UseAccount();
  const { type, open, title } = resultModal;
  const { accessToken } = resultAccount;
  const WrapperModal: any = React.useMemo(
    () => checkModal(type),
    [type]
  );

  useEffect(() => {
    toggle({ type: ModalTypeEnum.NULL, title: '' });
  }, [accessToken]);

  if (!WrapperModal) return null;

  return (
    <div
      className={clsx('wrapper-modal', open && 'active')}
      onClick={handleCloseModal}
    >
      {<WrapperModal />}
    </div>
  );
};

export default ModalComponent;
