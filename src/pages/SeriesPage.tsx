import React from 'react';
import { useGetFilterFilmQuery } from '../store/kinopoisk/kinopoiskApi';

const SeriesPage = () => {

  const {data:series} = useGetFilterFilmQuery('TV_SERIES')
  console.log(series)
  return (
    <div>
      series
    </div>
  );
};

export default SeriesPage;