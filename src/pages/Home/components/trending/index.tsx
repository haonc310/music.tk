import React from 'react';
import { UseTrending } from '../../../../hooks';
import CardItem from '../../../../components/CardMusic/card-item';
import CarouselProvider from '../../../../components/CarouselProvider';
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

const Trending = () => {
  const { t } = useTranslation();
  const { resultTrending } = UseTrending();
  const { data, loading } = resultTrending;

  return (
    <div className="trending mt-4 mb-4">
      <h3 className="card-title">{t('popular')}</h3>
      <div className="card-music">
        {data.length && !loading ? (
          <CarouselProvider settings={settings}>
            {data.map((music: any, index) => (
              <CardItem music={music} key={index} index={index} data={data} _id={music._id} />
            ))}
          </CarouselProvider>
        ) : (
          <CardLoading />
        )}
      </div>
    </div>
  );
};

export default Trending;
