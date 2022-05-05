import { useMusicHistory } from '../../hooks';
import { MusicItem } from '../CardMusic';

const HistoryList = () => {
  const { data } = useMusicHistory();
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
