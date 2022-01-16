import React from 'react';
import CarouselProvider from '../../../../components/CarouselProvider';
import { bannerDefault } from '../../../../constants';
import './banner.scss';

const settings = {
  mode: 'free-snap',
  snapMode: 'snap',
  spacing: 10,
  slidesPerView: 2,
  autoplay: true,
  loop: true,
  time: 1000,
  breakpoints: {
    '(max-width: 992px)': {
      slidesPerView: 1,
    },
  },
};
const Banner = () => {
  return (
    <div className="banner mt-2">
      <CarouselProvider settings={settings}>
        {bannerDefault.map((image, index) => (
          <div key={index} className="banner-item keen-slider__slide">
            <img src={image} alt="" />
          </div>
        ))}
      </CarouselProvider>
    </div>
  );
};

export default Banner;
