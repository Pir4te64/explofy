import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import FeatureCardReact from './FeatureCardReact';

interface Feature {
  icon: string;
  title: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ features }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="w-full"
    >
      {features.map((card, idx) => (
        <SwiperSlide key={idx} className="w-full">
          <div className="w-full">
            <FeatureCardReact icon={card.icon} title={card.title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureCarousel; 