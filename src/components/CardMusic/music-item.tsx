import clsx from 'clsx';
import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { UseMusic } from '../../hooks';
import { LoadingPlay } from '../Loading';
import './style.scss';

export const MusicItem = (props: any) => {
  const { music, data, index, _id, style } = props;
  const tempData = { data, index, _id };
  const {
    handlePausePlayClick,
    handleOnIndexMusic,
    _id_music,
    playing,
  } = UseMusic();

  return (
    <div
      className={clsx(
        'music-item cursor-pointer',
        _id_music === _id && playing && 'active'
      )}
      style={style}
    >
      <div className="music-left">
        <div className="music-image">
          <img src={music.image_music} alt="" />
          <div
            className={clsx(
              'music-play',
              _id === _id_music && playing && 'active'
            )}
          >
            {_id === _id_music ? (
              <>
                {playing ? (
                  // <CgPlayPauseO onClick={handlePausePlayClick} />
                  <LoadingPlay
                    className="absolute transform-50-center"
                    style={{ left: '45%', top: '56%' }}
                  />
                ) : (
                  <AiOutlinePlayCircle
                    onClick={handlePausePlayClick}
                  />
                )}
              </>
            ) : (
              <AiOutlinePlayCircle
                onClick={() => handleOnIndexMusic(tempData)}
              />
            )}
          </div>
        </div>
        <div className="music-info">
          <h4 className="music-name">{music.name_music}</h4>
          <p className="music-author">{music.subscribe}</p>
        </div>
      </div>
      <div className="music-right">
        <span>{music.time_format}</span>
      </div>
    </div>
  );
};
