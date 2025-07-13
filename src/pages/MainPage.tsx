import React from 'react';
import { EffectCoverflow, Navigation} from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useGetFilmsQuery } from '../store/kinopoisk/kinopoiskApi';

const MainPage = () => {

  const {data:films} = useGetFilmsQuery(2000)
  const filmsWithPosters = films?.filter(film => film.posterUrl && film.posterUrl !== 'https://kinopoiskapiunofficial.tech/images/posters/kp/1201206.jpg' && film.nameRu !== null) || []
      return (
    <div>
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
      {filmsWithPosters?.map((f)=> 
      
    <SwiperSlide key={f.filmId}>
<div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <img 
                  src={f.posterUrl} 
                  alt={f.nameEn} 
                  className='w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300'
                />
                <h3 className='text-white text-center mt-3 text-lg font-medium'>{f.nameRu}</h3>
                {f.rating && (
                  <div className="mt-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-sm font-bold">
                    {f.rating}
                  </div>
                )}
              </div>
            </div>

    </SwiperSlide>
      )}

    </Swiper>
    </div>
  );
};

export default MainPage;