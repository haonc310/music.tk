import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, login, logout, register } from '../features/account';
import { onLogOutRemoveData } from '../features/play-history';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { accountStore } from './use-selector';

const accessTokenLocal = localStorage.getItem('accessToken');

export const UseAccount = () => {
  const navigation = useNavigate()
  const dispatch = useAppDispatch();
  const resultAccount = useAppSelector(accountStore);
  const {accessToken} = resultAccount

  

  const handleLogin = (data: any) => dispatch(login(data));
  const handleRegister = (data: any) => dispatch(register(data));
  
  const handleLogout =useCallback(
    () => accessToken &&  dispatch(logout()),
    [dispatch, accessToken]
);
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
