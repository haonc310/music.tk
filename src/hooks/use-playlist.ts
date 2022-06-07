import { useCallback, useEffect } from 'react';
import { playlistStore, useAppDispatch, useAppSelector } from '.';
import { addListMusic, createPlaylist, getByIdPlaylist, getPlaylist } from '../features/playlist/patch-api';
import { onOpenPlaylist } from '../features/playlist/playlistSlice';

export const UsePlaylist = () => {
  const dispatch = useAppDispatch();
  const resultPlaylist = useAppSelector(playlistStore);
  const { isOpen, dataByIdPlayList } = resultPlaylist;

  const handleToggle = (isOpen: boolean) =>
    dispatch(onOpenPlaylist(isOpen));

    const getPlaylistAPI = useCallback(
      (params: any) => dispatch(getPlaylist(params)),
      [ dispatch]
  );

  const handleCreatePlaylist = useCallback(
    (params: any) =>  dispatch(createPlaylist(params)),
    [dispatch ]
);
const getByIdPlaylistAPI = useCallback(
  (params: any) => dispatch(getByIdPlaylist(params)),
  [dispatch]
);
const handleAddListMusic =useCallback(
  (data: any) =>  dispatch(addListMusic(data)),
  [dispatch]
);


  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return {
    resultPlaylist,
    handleToggle,
    getPlaylistAPI,
    handleCreatePlaylist,
    getByIdPlaylistAPI,
    dataByIdPlayList,
    handleAddListMusic
  };
};
