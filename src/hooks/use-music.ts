import React from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  addIndexMusic,
  onAudio,
  onPauseMusic,
  onDropdownMusic,
  onNextPrevMusic,
  onRandomMusic,
  addIdPlaylist,
} from '../features/music/music-slice';
import { musicStore } from '../hooks';

export const UseMusic = () => {
  const dispatch = useAppDispatch();
  const resultMusic = useAppSelector(musicStore);

  const {
    data,
    _id_music,
    index,
    playing,
    dropdownMusic,
    dataRandom,
    audio,
  } = resultMusic;

  const handleOnPauseMusic = React.useCallback(
    (playing: boolean) => dispatch(onPauseMusic(playing)),
    [dispatch]
  );
  const handleOnAudio = (audio: any) => dispatch(onAudio(audio));
  const handleOnNextPrevMusic = (index: number) =>
    dispatch(onNextPrevMusic(index));
  const handleOnDropdownMusic = (dropdown: boolean) =>
    dispatch(onDropdownMusic(dropdown));
  const handleOnIndexMusic = (data: any) =>
    dispatch(addIndexMusic(data));
  const handleOnRandomMusic = () => dispatch(onRandomMusic());
  const handleAddIdPlaylist = (id_playList: string) => dispatch(addIdPlaylist(id_playList));

  const handlePausePlayClick = React.useCallback(() => {
    if (playing) audio?.pause();
    else audio?.play();
    handleOnPauseMusic(!playing);
  }, [playing, audio, handleOnPauseMusic]);

  return {
    handleOnPauseMusic,
    handlePausePlayClick,
    handleOnAudio,
    resultMusic,
    playing,
    handleOnIndexMusic,
    handleOnDropdownMusic,
    dropdownMusic,
    _id_music,
    handleOnNextPrevMusic,
    handleOnRandomMusic,
  };
};
