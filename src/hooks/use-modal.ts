import React from 'react';
import { useAppSelector, useAppDispatch } from './use-react-redux';
import { openModal } from '../features/modal';
import { modalStore } from '../hooks/use-selector';

export const UseModal = () => {
  const resultModal = useAppSelector(modalStore);
  const dispatch = useAppDispatch();
  const toggle = React.useCallback(
    (data) => dispatch(openModal(data)),
    [dispatch]
  );

  return {
    resultModal,
    toggle,
  };
};
