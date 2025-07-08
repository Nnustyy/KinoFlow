import React from 'react';
import type { Film } from '../models/models';

const FilmSearchCard = ({data}:{data:Film}) => {
  return (
    <li>
      <a href="/" className='flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-200'>
      <div className='w-10 h-10 mr-2 overflow-hidden rounded-full'>
        <img src={data.posterUrl} alt={data.nameEn}className='w-full h-full object-cover'/>
      </div>
      {data.nameRu}
      </a>
    </li>
  );
};

export default FilmSearchCard;