import { useGetFilterFilmQuery } from '../store/kinopoisk/kinopoiskApi';
import ContentSection from '../components/ContentSection';
const FilmPage = () => {
  const { data: films, isLoading: filmsLoading } = useGetFilterFilmQuery('FILM');
  const { data: tvShows, isLoading: tvShowsLoading } = useGetFilterFilmQuery('TV_SHOW');

  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <ContentSection data={films} loading={filmsLoading} loadingName='Загрузка фильмов...' sectionName='Фильмы'  />
      <ContentSection data={tvShows} loading={tvShowsLoading} loadingName='Загрузка ТВ-шоу...' sectionName='ТВ-шоу' />

    </div>
  );
};

export default FilmPage;