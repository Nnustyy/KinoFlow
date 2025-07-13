import FilmSwiper from './FilmSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import type {  FilmItem } from '../models/models';


const SwiperComponent = ({dataList}:{dataList:FilmItem[]}) => {
  return (
    <Swiper
    modules={[Navigation,EffectCoverflow]}
    spaceBetween={10}
    slidesPerView={3}
    navigation
    loop
    effect={'coverflow'}
    coverflowEffect={{
      rotate:10,
      stretch:0,
      depth:100,
      modifier:2,
      slideShadows:true
    }}
    centeredSlides={true}
    breakpoints={{
      1024: {
        slidesPerView: 4,
      },}}
    >
      {dataList.map((f) => 
      <SwiperSlide>
        <FilmSwiper key={f.kinopoiskId} data={f} />
      </SwiperSlide>
        )}
      </Swiper>
  );
};

export default SwiperComponent;