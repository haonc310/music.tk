import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import './style.scss';

export const MusicItem = (props: any) => {
  const { music } = props;
  return (
    <div className="music-item cursor-pointer">
      <div className="music-left">
        <div className="music-image">
          <img src={music.image_music} alt="" />
          <div className="music-play">
            <AiOutlinePlayCircle />
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
