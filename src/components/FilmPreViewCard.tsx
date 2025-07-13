import type {  FilmItem } from '../models/models';

interface FilmCardProps {
  film: FilmItem;
}

const FilmPreViewCard = ({ film}: FilmCardProps) => {
  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.03]"
    >
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors duration-300 h-full flex flex-col">
        <div className="relative pt-[150%]">
          <img
            src={film.posterUrlPreview || film.posterUrl || '/placeholder.jpg'}
            alt={film.nameRu || film.nameEn || 'Film poster'}
            className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition duration-300"
            loading="lazy"
          />
        
          <div className="absolute top-2 left-2 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded-md">
            <span className="text-yellow-400 text-sm font-bold">
              {film.ratingKinopoisk?.toFixed(1) || film.ratingImdb?.toFixed(1) || '—'}
            </span>
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
            <span className="bg-purple-600/90 text-white text-xs px-2 py-1 rounded">
              {film.year}
            </span>
            <span className="bg-gray-900/80 text-white text-xs px-2 py-1 rounded capitalize">
              {film.type === 'FILM' ? 'Фильм' : film.type === 'TV_SERIES' ? 'Сериал' : film.type}
            </span>
          </div>
        </div>
        <div className="p-3 flex-grow">
          <h3 className="font-medium text-white line-clamp-2 text-sm">
            {film.nameRu || film.nameEn || film.nameOriginal}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1">
            {film.genres?.slice(0, 2).map((genre) => (
              <span key={genre.genre} className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded">
                {genre.genre}
              </span>
            ))}
            {film.countries?.slice(0, 1).map((country) => (
              <span key={country.country} className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded">
                {country.country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPreViewCard;