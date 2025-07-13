import { useGetFilmsQuery } from '../store/kinopoisk/kinopoiskApi';
import SwiperComponent from '../components/SwiperComponent';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const {data:films} = useGetFilmsQuery(2000)
  const filmsWithPosters = films?.filter(film => film.posterUrl && film.posterUrl !== 'https://kinopoiskapiunofficial.tech/images/posters/kp/1201206.jpg' && film.nameRu !== null) || []



      return (
            <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 min-h-screen text-white overflow-hidden">
  <div className="relative z-10 container mx-auto px-4 py-16">
    <section className="mb-24">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Лучшие фильмы и сериалы в 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"> одном сервисе</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Погрузитесь в мир качественного контента без ограничений. 
          Более 10 000 фильмов и сериалов в 4K качестве.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full font-medium hover:opacity-90 transition shadow-lg shadow-purple-500/30">
            Начать просмотр
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
            Подробнее
          </button>
        </div>
      </div>
    </section>
    <section>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold">Популярное сейчас</h3>
        <Link to='/media' className="text-purple-300 hover:text-purple-200 transition flex items-center">
          Смотреть все <span className="ml-2">→</span>
        </Link>
      </div>
      <SwiperComponent dataList={filmsWithPosters} />
    </section>
        <Footer/>
  </div>
</div>
  );
};

export default MainPage;