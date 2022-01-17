import React from 'react';
import { UseMusic } from '../../hooks';
import { MusicItem } from '../CardMusic';

const WaitingList = () => {
  const { resultMusic } = UseMusic();
  const { dataRandom } = resultMusic;
  if (!dataRandom.length) {
    return (
      <div>
        <p className="heading-title">Không có bài viết nào</p>
      </div>
    );
  }
  return (
    <div>
      {dataRandom.map((music: any, index) => (
        <MusicItem
          key={index}
          index={index}
          music={music}
          data={dataRandom}
          _id={music._id}
          style={{
            width: '100%',
          }}
        />
      ))}
    </div>
  );
};

export default WaitingList;
