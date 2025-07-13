import React from 'react';
import type { Film } from '../models/models';


interface FilmSwiperProps {
  data:Film
}

const FilmSwiper:React.FC<FilmSwiperProps> = ({data}) => {
  return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col items-center">
              <img 
              src={data.posterUrl} 
              alt={data.nameEn} 
              className='w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300'
              />
                <h3 className='text-white text-center mt-3 text-lg font-medium'>{data.nameRu}</h3>
                {data.ratingKinopoisk && (
                <div className="mt-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-sm font-bold">
                {data.ratingKinopoisk}
                </div>
                )}
                    </div>
                  </div>
        )}


export default FilmSwiper;