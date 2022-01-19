import React from 'react';
import { useAppSelector, useAppDispatch } from './use-react-redux';
import { openModal, closeModal } from '../features/modal';
import { modalStore } from '../hooks/use-selector';

export const UseModal = () => {
  const resultModal = useAppSelector(modalStore);
  const dispatch = useAppDispatch();
  const toggle = React.useCallback(
    (data) => dispatch(openModal(data)),
    [dispatch]
  );
  const handleCloseModal = React.useCallback(
    (data) => dispatch(closeModal(data)),
    [dispatch]
  );

  return {
    resultModal,
    toggle,
    handleCloseModal,
  };
};
