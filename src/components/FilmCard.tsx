import React from 'react';
import { useLocation } from 'react-router-dom';
import type { Film } from '../models/models';

const FilmCard = () => {
  const location = useLocation()
  const film:Film = location.state.film
  return (
<div className="flex flex-col md:flex-row bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="md:w-1/3">
        <img
          className="w-full h-auto rounded-lg"
          src={film.posterUrl}
          alt={film.nameEn}
        />
      </div>
      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
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
      </div>
    </div>
  );
};

export default FilmCard;