import React from 'react';
import CarouselProvider from '../../../../components/CarouselProvider';
import { bannerDefault } from '../../../../constants';
import './banner.scss';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Banner = () => {
  return (
    <div className="banner mt-2">
      <CarouselProvider settings={settings}>
        {bannerDefault.map((image, index) => (
          <div key={index} className="banner-item">
            <img src={image} alt="" />
          </div>
        ))}
      </CarouselProvider>
    </div>
  );
};

export default Banner;
