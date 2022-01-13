import React from 'react';
import { UseTrending } from '../../../../hooks';
import CardItem from '../../../../components/CardMusic/card-item';
import CarouselProvider from '../../../../components/CarouselProvider';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplaySpeed: 3000,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const Trending = () => {
  const { resultTrending } = UseTrending();
  const { data, loading } = resultTrending;
  return (
    <div className="trending mt-4 mb-4">
      <div className="card-music">
        <h3 className="card-title">Thịnh hành</h3>
        <CarouselProvider settings={settings}>
          {data.map((music, index) => (
            <CardItem music={music} key={index} />
          ))}
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Trending;
