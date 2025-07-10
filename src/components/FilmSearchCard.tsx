import React from 'react';
import type { Film } from '../models/models';
import { Link } from 'react-router-dom';

const FilmSearchCard = ({data}:{data:Film}) => {
  return (
    <li>
      <Link to={`films/${data.filmId}`} state={{film:data}} className='flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-purple-100 dark:hover:text-black transition-colors duration-200'>
      <div className='w-10 h-10 mr-2 overflow-hidden rounded-full'>
        <img src={data.posterUrl} alt={data.nameEn}className='w-full h-full object-cover'/>
      </div>
      {data.nameRu}
      </Link>
    </li>
  );
};

export default FilmSearchCard;