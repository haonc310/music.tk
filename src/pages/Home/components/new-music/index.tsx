import React from 'react';
import { UseNewMusic } from '../../../../hooks';
import { MusicItem } from '../../../../components/CardMusic';
import { ListLoading } from '../../../../components/Loading';

const NewMusic = () => {
  const { resultNewMusic } = UseNewMusic();
  const { data, loading } = resultNewMusic;
  console.log(data);

  return (
    <div>
      <h3 className="music-title"> Mới Phát Hành</h3>
      {data.length && !loading ? (
        <div className="music">
          {data.map((music: any, index) => (
            <MusicItem
              music={music}
              key={index}
              index={index}
              data={data}
              _id={music._id}
            />
          ))}
        </div>
      ) : (
        <ListLoading />
      )}
    </div>
  );
};

export default NewMusic;
