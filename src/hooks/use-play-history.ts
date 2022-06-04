import React from 'react';
import { getPlayHistory } from '../features/play-history/patch-api';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { accountStore, historyStore } from './use-selector';
export const useMusicHistory = () => {
  const accessTokenLocal = localStorage.getItem('accessToken');
  const dispatch = useAppDispatch();
  const resultHistory = useAppSelector(historyStore);
  const resultAccount = useAppSelector(accountStore);
  const { data, pagination, loading } = resultHistory;

  const {accessToken} = resultAccount

  const handleGetData = React.useCallback(
    (params: any) => {
      return accessTokenLocal  && dispatch(getPlayHistory(params));
    },
    [accessTokenLocal, dispatch]
  );

  return { data, loading, pagination, handleGetData };
};
