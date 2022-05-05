import { useCallback } from 'react';
import { getProfile, login, logout, register } from '../features/account';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { accountStore } from './use-selector';

const accessTokenLocal = localStorage.getItem('accessToken');

export const UseAccount = () => {
  const dispatch = useAppDispatch();
  const resultAccount = useAppSelector(accountStore);

  const handleLogin = (data: any) => dispatch(login(data));
  const handleRegister = (data: any) => dispatch(register(data));
  const handleLogout = () => dispatch(logout());
  const handleGetProfile = useCallback(
    () => accessTokenLocal && dispatch(getProfile()),
    [dispatch]
  );

  return {
    resultAccount,
    handleLogin,
    handleRegister,
    handleGetProfile,
    handleLogout,
  };
};
