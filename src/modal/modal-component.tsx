import React from 'react';
import { ModalTypeEnum } from '../constants';
import { UseModal } from '../hooks';
import ModalLogin from './modal-login';

const checkModal = (modalType: ModalTypeEnum) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <ModalLogin />;
    default:
      return null;
  }
};
const ModalComponent = () => {
  const { resultModal, toggle } = UseModal();
  const { type, open, title } = resultModal;
  console.log(type);
  const WrapperModal: any = React.useMemo(
    () => checkModal(type),
    [type]
  );
  React.useEffect(() => {
    toggle({ type: ModalTypeEnum.NULL, title: '' });
  }, []);

  return <div></div>;
};

export default ModalComponent;
