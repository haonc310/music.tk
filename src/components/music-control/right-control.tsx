import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { RiPlayListLine } from 'react-icons/ri';
import { UseFavoriteAccount, UseModal, UseMusic, UsePlaylist } from '../../hooks';
import OtherDots from '../other-dots/other-dots';
import './style.scss';

export const RightControl = () => {
  const { toggle } = UseModal();
  const { handleToggle, resultPlaylist } = UsePlaylist();
  const { isOpen } = resultPlaylist;

  const { resultMusic } = UseMusic();
  const { data } = resultMusic;
  const { link_mv, src_music, name_music , _id} = data;
  const { handleCreateFavorite } = UseFavoriteAccount();
  return (
    <div className="right-control">
      <MdFavorite
        size="2.5rem"
        className="control-action m-l-r-1 control-favorite"
        onClick ={() => handleCreateFavorite({
          idMusic: _id,
        })}
      />
      {/* <AiOutlineComment
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
      /> */}
      <RiPlayListLine
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
        onClick={() => handleToggle(!isOpen)}
      />

      <OtherDots
        link_mv={link_mv}
        src_music={src_music}
        name_music={name_music}
      />
    </div>
  );
};
