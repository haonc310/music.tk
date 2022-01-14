import React from 'react';
import { getNewMusic } from '../features/new-musci';
import { useAppDispatch, useAppSelector } from './index';
import { newMusicStore } from './use-selector';
export const UseNewMusic = () => {
  const dispatch = useAppDispatch();
  const resultNewMusic = useAppSelector(newMusicStore);
  const { error, data }: any = resultNewMusic;

  const getNewMusicAPI = React.useCallback(
    (params: any) => dispatch(getNewMusic(params)),
    [dispatch]
  );

  React.useEffect(() => {
    if (!data.length) getNewMusicAPI({ _limit: 30 });
  }, [error]);
  return {
    resultNewMusic,
  };
};
