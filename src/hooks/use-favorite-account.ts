import { useCallback, useEffect } from 'react';
import { createFavorite, getFavorite } from '../features/favorite-account/patch-api';
import { UseAccount } from './use-account';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { favoriteAccountStore } from './use-selector';

export const UseFavoriteAccount = () => {
  const dispatch = useAppDispatch();
  const resultFavoriteAccount = useAppSelector(favoriteAccountStore);

  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;

  const handleCreateFavorite = useCallback(
    (data: any) => accessToken && dispatch(createFavorite(data)),
    [accessToken, dispatch]
  );
  const handleGetFavorite = useCallback(
    (data: any) => dispatch(getFavorite(data)),
    [accessToken, dispatch]
  );

  return {
    resultFavoriteAccount,
    handleCreateFavorite,
    handleGetFavorite,
  };
};
