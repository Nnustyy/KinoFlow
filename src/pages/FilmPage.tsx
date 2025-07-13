import React from 'react';
import { useGetFilterFilmQuery } from '../store/kinopoisk/kinopoiskApi';
import FilmPreViewCard from '../components/FilmPreViewCard';
const FilmPage = () => {

  const{data} = useGetFilterFilmQuery('FILM')
  
  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

      {data?.map((f) => 
      <FilmPreViewCard film={f} key={f.kinopoiskId} />
      )}
      </div>
    </div>
  );
};

export default FilmPage;