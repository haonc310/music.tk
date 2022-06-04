import React from 'react';
import { getFavorite } from '../features/favorite/patch-api';
import { useAppDispatch, useAppSelector } from './index';
import { favoriteStore } from './use-selector';
export const UseFavorite = () => {
  const dispatch = useAppDispatch();
  const resultFavorite = useAppSelector(favoriteStore);
  const { error, data }: any = resultFavorite;

  const getFavoriteAPI = React.useCallback(
    (params: any) =>  dispatch(getFavorite(params)),
    [dispatch]
  );

  React.useEffect(() => {
    if (!data.length) getFavoriteAPI({ _limit: 30 });
  }, [error]);
  return {
    resultFavorite,
  };
};
