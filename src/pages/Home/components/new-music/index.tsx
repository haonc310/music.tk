import React from 'react';
import { UseNewMusic } from '../../../../hooks';
import { MusicItem } from '../../../../components/CardMusic';
const NewMusic = () => {
  const { resultNewMusic } = UseNewMusic();
  const { data } = resultNewMusic;
  console.log(data);

  return (
    <div>
      <h3 className="music-title"> Mới Phát Hành</h3>
      <div className="music mt-4">
        {data.map((music, index) => (
          <MusicItem music={music} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewMusic;
