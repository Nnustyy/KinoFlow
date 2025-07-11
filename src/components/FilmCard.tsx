import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Film, FilmStaff} from '../models/models';
import { useLimitedItemsQuery } from '../hooks/limitItems';
import ActorsSwiper from './ActorsSwiper'



const FilmCard = () => {
  const location = useLocation();
  const film:Film = location.state.film;
  const actors = useLimitedItemsQuery(10,film.filmId)

  useEffect(() => {
    console.log(actors)
  },[actors])

  return (



<div className=" flex justify-between md:flex-row bg-gray-900 text-white p-6 shadow-lg h-screen ">
      <div className="md:w-1/3">
        <img
          className="w-full h-auto rounded-lg"
          src={film.posterUrl}
          alt={film.nameEn}
        />
      </div>
      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 overflow-visible flex-grow">
        <h2 className="text-3xl font-bold mb-2">{film.nameRu} ({film.year})</h2>
        <p className="text-lg mb-1">
          <span className="font-semibold">Рейтинг:</span> {film.rating}
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold">Длительность:</span> {film.filmLength}
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold">Жанр:</span> {film.genres.map(g => g.genre).join(', ')}
        </p>
        <p className="text-lg mt-4">
          <span className="font-semibold"></span> {film.description}
        </p>
        <div  className='flex-none w-full mt-24'>
      <ActorsSwiper actors={actors} />
        </div>
      </div>
    </div> 


    
  );
};

export default FilmCard;