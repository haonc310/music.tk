import React from 'react';
import { UseMusic } from '../../hooks';

export const LeftControl = () => {
  const { resultMusic } = UseMusic();
  const { data } = resultMusic;

  return (
    <div className="left-control">
      <img src={data.image_music} alt="" />
      <div className="left-info">
        <h4>{data.name_music}</h4>
        <p>{data.subscribe}</p>
      </div>
    </div>
  );
};
