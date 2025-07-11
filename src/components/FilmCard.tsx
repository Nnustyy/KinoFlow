import { useLocation } from 'react-router-dom';
import type { Film, FilmStaff} from '../models/models';
import { useLimitedItemsQuery } from '../hooks/limitItems';
import ActorsSwiper from './ActorsSwiper'
import FilmDetails from './FilmDetails';



const FilmCard = () => {
  const location = useLocation();
  const film:Film = location.state.film;
  const actors:FilmStaff[]  | undefined= useLimitedItemsQuery(10,film.filmId)

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
        <div className='flex-none w-full mt-24'>
          <ActorsSwiper actors={actors} />
        </div>
      </div>
    </div> 
  );
};

export default FilmCard;