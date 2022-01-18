import React from 'react';
import CardItem from '../../../../components/CardMusic/card-item';
import CarouselProvider from '../../../../components/CarouselProvider';
import { UseFavorite } from '../../../../hooks';
import { CardLoading } from '../../../../components/Loading';
import { useTranslation } from 'react-i18next';

const settings = {
  mode: 'free',
  spacing: 10,
  slidesPerView: 6,
  breakpoints: {
    '(max-width: 1400px)': {
      slidesPerView: 5,
    },
    '(max-width: 1200px)': {
      slidesPerView: 4,
    },
    '(max-width: 1100px)': {
      slidesPerView: 3,
    },
    '(max-width: 830px)': {
      slidesPerView: 2,
    },
  },
};
const Favorite = () => {
  const { t } = useTranslation();
  const { resultFavorite } = UseFavorite();
  const { data, loading } = resultFavorite;
  return (
    <div className="favorite mb-2">
      <div className="card-music">
        <h3 className="card-title">{t('favorite')}</h3>
        {data.length && !loading ? (
          <CarouselProvider settings={settings}>
            {data.map((music: any, index) => (
              <CardItem
                music={music}
                key={index}
                data={data}
                _id={music._id}
                index={index}
              />
            ))}
          </CarouselProvider>
        ) : (
          <CardLoading />
        )}
      </div>
    </div>
  );
};

export default Favorite;
