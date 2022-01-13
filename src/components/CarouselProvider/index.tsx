import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function CarouselProvider({ children, settings }: any) {
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
}

export default CarouselProvider;
