import React from 'react';
import { UseMusic } from '../../hooks';
import clsx from 'clsx';

export const LeftControl = () => {
  const { resultMusic, playing } = UseMusic();
  const { data } = resultMusic;

  return (
    <div className="left-control">
      <img
        src={data.image_music}
        alt=""
        className={clsx(playing && 'active')}
      />
      <div className="left-info">
        <h4>{data.name_music}</h4>
        <p>{data.subscribe}</p>
      </div>
    </div>
  );
};
