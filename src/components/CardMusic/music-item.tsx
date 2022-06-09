import clsx from 'clsx';
import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { UseMusic, useMusicHistory } from '../../hooks';
import { LoadingPlay } from '../Loading';
import OtherDots from '../other-dots/other-dots';
import './style.scss';

export const MusicItem = (props: any) => {
  const { music, data, index, _id, style, check = false } = props;
  const tempData = { data, index, _id };
  const { handlePausePlayClick, handleOnPauseMusic, handleOnIndexMusic, _id_music, playing } =
    UseMusic();
  const { handleGetData } = useMusicHistory();
  return (
    <div
      className={clsx('music-item cursor-pointer', _id_music === _id && playing && 'active')}
      style={style}
    >
      <div className="music-left">
        <div className="music-image">
          <img src={music.image_music} alt="" />
          <div className={clsx('music-play', _id === _id_music && playing && 'active')}>
            {_id === _id_music ? (
              <>
                {playing ? (
                  // <CgPlayPauseO onClick={handlePausePlayClick} />
                  <LoadingPlay
                    className="absolute transform-50-center"
                    style={{ left: '45%', top: '56%' }}
                  />
                ) : (
                  <AiOutlinePlayCircle onClick={handlePausePlayClick} />
                )}
              </>
            ) : (
              <AiOutlinePlayCircle
                onClick={() => {
                  handleOnIndexMusic(tempData);
                }}
              />
            )}
          </div>
        </div>
        <div className="music-info">
          <h4 className="music-name">{music.name_music}</h4>
          <p className="music-author">{music.name_singer || 'unknown'}</p>
        </div>
      </div>

      <div>
        <div className="music-mid">
          <OtherDots
            check={check}
            link_mv={music.link_mv}
            src_music={music.src_music}
            name_music={music.name_music}
            _id={_id}
          />
        </div>
        <div className="music-right">
          <span>{music.time_format}</span>
        </div>
      </div>
    </div>
  );
};
