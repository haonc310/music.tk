import { notification } from 'antd';
import { t } from 'i18next';
import { useCallback, useEffect } from 'react';
import { ModalTypeEnum } from '../constants';
import { createFavorite, getFavorite } from '../features/favorite-account/patch-api';
import { UseAccount } from './use-account';
import { UseModal } from './use-modal';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { favoriteAccountStore } from './use-selector';
export const UseFavoriteAccount = () => {
  const dispatch = useAppDispatch();
  const resultFavoriteAccount = useAppSelector(favoriteAccountStore);
  const { toggle } = UseModal();
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;

  const handleCreateFavorite = useCallback(
    (data: any) => {
      if(!accessToken){
        notification.info({message: 'Vui lòng đăng nhập',})
        toggle({
          type: ModalTypeEnum.LOGIN,
          title: t('login'),
        });
      }
      accessToken && dispatch(createFavorite(data))
    },
    [accessToken, dispatch]
  );
  const handleGetFavorite = useCallback(
    (data: any) =>  dispatch(getFavorite(data)),
    [ dispatch]
  );

  return {
    resultFavoriteAccount,
    handleCreateFavorite,
    handleGetFavorite,
  };
};
