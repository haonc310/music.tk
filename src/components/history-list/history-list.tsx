import React, { useEffect, useState } from 'react';
import ApiPlayHistory from '../../apis/api-play-history';
import { UseMusic } from '../../hooks';
import { MusicItem } from '../CardMusic';

const HistoryList = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await ApiPlayHistory.getPlayHistory({});
      const { data } = res;
      const cloneData = data?.map((item: any) => item?.music);
      setData(cloneData);
    })();
  }, []);
  return (
    <div>
      {data?.map((music: any, index: number) => (
        <MusicItem
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

export default HistoryList;
