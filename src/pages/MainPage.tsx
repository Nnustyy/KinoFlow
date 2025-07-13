import { useGetFilmsQuery } from '../store/kinopoisk/kinopoiskApi';
import SwiperComponent from '../components/SwiperComponent';

const MainPage = () => {

  const {data:films} = useGetFilmsQuery(2000)
  const filmsWithPosters = films?.filter(film => film.posterUrl && film.posterUrl !== 'https://kinopoiskapiunofficial.tech/images/posters/kp/1201206.jpg' && film.nameRu !== null) || []
      return (
    <div className='bg-gray-800'>
      <SwiperComponent dataList={filmsWithPosters} />
    </div>
  );
};

export default MainPage;