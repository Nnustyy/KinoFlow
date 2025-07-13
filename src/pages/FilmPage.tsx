import { useGetFilterFilmQuery } from '../store/kinopoisk/kinopoiskApi';
import FilmPreViewCard from '../components/FilmPreViewCard';
const FilmPage = () => {
  const { data: films, isLoading: filmsLoading } = useGetFilterFilmQuery('FILM');
  const { data: tvShows, isLoading: tvShowsLoading } = useGetFilterFilmQuery('TV_SHOW');

  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Фильмы</h2>
        {filmsLoading ? (
          <div className="text-white">Загрузка фильмов...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {films?.map((f) => (
              <FilmPreViewCard film={f} key={f.kinopoiskId} />
            ))}
          </div>
        )}
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">ТВ-шоу</h2>
        {tvShowsLoading ? (
          <div className="text-white">Загрузка ТВ-шоу...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {tvShows?.map((show) => (
              <FilmPreViewCard film={show} key={show.kinopoiskId} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FilmPage;