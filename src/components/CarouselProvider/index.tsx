import { useKeenSlider } from 'keen-slider/react';
import React from 'react';
import 'keen-slider/keen-slider.min.css';

function CarouselProvider({ children, settings }: any) {
  const [ref] = useKeenSlider<HTMLDivElement>(settings);
  return (
    <div ref={ref} className="keen-slider">
      {children}
    </div>
  );
}

export default CarouselProvider;
