import clsx from 'clsx';
import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { RiPlayCircleLine } from 'react-icons/ri';
import { CenterControl, LeftControl, RightControl } from '.';
import { UseMusic } from '../../hooks';
import './style.scss';

export const MusicControl = (props: any) => {
  const { dropdownMenu } = props;
  const { dropdownMusic, handleOnDropdownMusic, resultMusic } = UseMusic();

  const { data } = resultMusic;
  const { src_music } = data;

  return (
    <>
      {dropdownMusic && (
        <div className="btn-open" onClick={() => handleOnDropdownMusic(!dropdownMusic)}>
          <RiPlayCircleLine />
        </div>
      )}
      {src_music && (
        <div
          className={clsx(
            'music-control mobile',
            dropdownMusic ? 'hidden' : 'active',
            !dropdownMenu && 'full'
          )}
        >
          <div className="drow">
            <FaAngleDoubleDown
              size="2.5rem"
              onClick={() => handleOnDropdownMusic(!dropdownMusic)}
            />
          </div>
          <LeftControl />
          <CenterControl />
          <RightControl />
        </div>
      )}
    </>
  );
};
