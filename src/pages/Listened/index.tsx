import React, { useEffect, useState } from 'react';
import ApiPlayHistory from '../../apis/api-play-history';
import { MusicItem } from '../../components/CardMusic/music-item';
import { ListLoading } from '../../components/Loading';

const Listened = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await ApiPlayHistory.getPlayHistory({});
      console.log(res);
      const { data } = res;
      const cloneData = data?.map((item: any) => item?.music);
      setData(cloneData);
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {data?.length && !loading ? (
        <div className="music">
          {data?.map((music: any, index: number) => (
            <MusicItem music={music} key={index} index={index} data={data} _id={music._id} />
          ))}
        </div>
      ) : (
        <ListLoading />
      )}
    </div>
  );
};

export default Listened;
