import type {FilmStaff} from '../models/models';
import { Navigation} from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
const ActorsSwiper = ({actors}:{actors:FilmStaff[] | undefined}) => {
  return (
    <Swiper
    modules={[Navigation]}
    spaceBetween={1}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop
    >
    {actors?.map((actor) => 
    <SwiperSlide key={actor.staffId} >
    <div >
    <img src={actor.posterUrl} alt={actor.nameEn} className='w-36 h-48 object-cover object-top rounded-sm mx-auto' />
    <h3  className='text-center mt-2' >{actor.nameRu}</h3>
    </div>

    </SwiperSlide>
    )}

    </Swiper>
  );
};

export default ActorsSwiper;