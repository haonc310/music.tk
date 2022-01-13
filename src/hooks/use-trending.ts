import React, { useCallback, useEffect } from 'react';
import { getTrending } from '../features/trending/patch-api';
import {
  useAppDispatch,
  useAppSelector,
  trendingStore,
} from './index';

export const UseTrending = () => {
  const dispatch = useAppDispatch();
  const resultTrending = useAppSelector(trendingStore);
  const { error, data } = resultTrending;

  const getTrendingApi = useCallback(
    (params: any) => dispatch(getTrending(params)),
    [dispatch]
  );
  useEffect(() => {
    if (!data.length) getTrendingApi({ _limit: 30 });
  }, [error]);

  return {
    resultTrending,
  };
};
