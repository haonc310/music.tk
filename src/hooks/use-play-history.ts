import React from 'react';
import { getPlayHistory } from '../features/play-history/patch-api';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { historyStore } from './use-selector';
const accessTokenLocal = localStorage.getItem('accessToken');
export const useMusicHistory = () => {
  const dispatch = useAppDispatch();
  const resultHistory = useAppSelector(historyStore);
  const { data, pagination, loading } = resultHistory;

  const handleGetData = React.useCallback(
    (params: any) => {
      return accessTokenLocal && dispatch(getPlayHistory(params));
    },
    [accessTokenLocal, dispatch]
  );

  return { data, loading, pagination, handleGetData };
};
