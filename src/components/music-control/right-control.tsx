import React from 'react';
import { RiPlayListLine } from 'react-icons/ri';
import { AiOutlineComment } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import './style.scss';

export const RightControl = () => {
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
      />
      <HiOutlineDotsHorizontal
        size="2.5rem"
        className="control-action m-l-r-1 control-loop"
      />
    </div>
  );
};
