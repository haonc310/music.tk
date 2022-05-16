import { useTranslation } from 'react-i18next';
import { MusicItem } from '../../../../components/CardMusic';
import { ListLoading } from '../../../../components/Loading';
import { UseNewMusic } from '../../../../hooks';

const NewMusic = () => {
  const { t } = useTranslation();
  const { resultNewMusic } = UseNewMusic();
  const { data, loading } = resultNewMusic;
  console.log(data);
  return (
    <div>
      <h3 className="music-title"> {t('new-release')}</h3>
      {data.length && !loading ? (
        <div className="music">
          {data.map((music: any, index) => (
            <MusicItem music={music} key={index} index={index} data={data} _id={music._id} />
          ))}
        </div>
      ) : (
        <ListLoading />
      )}
    </div>
  );
};

export default NewMusic;
