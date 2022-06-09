import React from 'react';
import { UseMusic, UsePlaylist } from '../../hooks';
import { MusicItem } from '../CardMusic';

const WaitingList = () => {
  const { resultMusic } = UseMusic();
  const { dataRandom } = resultMusic;

  const { dataByIdPlayList } = UsePlaylist();
  const dataByIdPlayListLength = dataByIdPlayList.length;
  const dataRandomLength = dataRandom.length;

  console.log({ dataByIdPlayList });

  const data = React.useMemo(
    () => (dataByIdPlayListLength ? dataByIdPlayList.map((item: any) => item.music) : dataRandom),
    [dataByIdPlayList, dataByIdPlayListLength, dataRandom, dataRandomLength]
  );
  if (!data.length) {
    return (
      <div>
        <p className="heading-title">Không có bài viết nào</p>
      </div>
    );
  }
  return (
    <div>
      {data.map((music: any, index: any) => (
        <MusicItem
          check={dataByIdPlayListLength ? true : false}
          key={index}
          index={index}
          music={music}
          data={data}
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
