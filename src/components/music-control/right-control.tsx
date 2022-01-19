import React from 'react';
import { RiPlayListLine } from 'react-icons/ri';
import { AiOutlineComment } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import './style.scss';
import { UseModal, UseMusic, UsePlaylist } from '../../hooks';
import OtherDots from '../other-dots/other-dots';
import { ModalTypeEnum } from '../../constants';

export const RightControl = () => {
  const { toggle } = UseModal();
  const { handleToggle, resultPlaylist } = UsePlaylist();
  const { isOpen } = resultPlaylist;

  const { resultMusic, handleOnPauseMusic } = UseMusic();
  const { data } = resultMusic;
  const { link_mv } = data;

  return (
    <div className="right-control">
      <MdFavorite
        size="2.5rem"
        className="control-action m-l-r-1 control-favorite"
      />
      <AiOutlineComment
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
      />
      <RiPlayListLine
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
        onClick={() => handleToggle(!isOpen)}
      />
      {/* <HiOutlineDotsHorizontal
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
        onClick={() =>
          toggle({
            type: ModalTypeEnum.VIDEO_CLIP,
            link_mv,
          })
        }
      /> */}
      <OtherDots />
    </div>
  );
};
