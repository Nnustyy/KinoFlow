import { useLocation } from 'react-router-dom';
import { useLimitedItemsQuery } from '../hooks/limitItems';
import type { Film } from '../models/models';
import ActorsSwiper from './ActorsSwiper'
import FilmDetails from './FilmDetails';
import { useGetFilmTrailerQuery } from '../store/kinopoisk/kinopoiskApi';


const FilmCard = () => {
  const location = useLocation();
  const film:Film = location.state.film;
  const actors= useLimitedItemsQuery(10,film.filmId)
  const {data:filmTrailer}=  useGetFilmTrailerQuery(film.filmId)
  const filmData = filmTrailer?.slice(0,1);
  const filmUrl = filmData?.map((f) => f.url);

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
        <FilmDetails info='Рейтинг' value={film.rating} />
        <FilmDetails info='Длительность' value={film.filmLength} />
        <FilmDetails info='Жанр'  value={film.genres.map(g => g.genre).join(', ')} />
        <FilmDetails value={film.description}/>
        <div>
          <a 
          href={filmUrl} 
          target="_blank"
          className="cursor-pointer mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
          <span className="flex items-center">
          Смотреть трейлер
          </span>
          </a>
        </div>
        <div className='flex-none w-full mt-24'>
          <ActorsSwiper actors={actors} />
        </div>
      </div>
    </div> 
  );
};

export default FilmCard;