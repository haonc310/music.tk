import { useEffect } from 'react';
import { playlistStore, useAppDispatch, useAppSelector } from '.';
import { onOpenPlaylist } from '../features/playlist/playlistSlice';

export const UsePlaylist = () => {
  const dispatch = useAppDispatch();
  const resultPlaylist = useAppSelector(playlistStore);
  const { isOpen } = resultPlaylist;

  const handleToggle = (isOpen: boolean) =>
    dispatch(onOpenPlaylist(isOpen));

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return {
    resultPlaylist,
    handleToggle,
  };
};
