import { useGetFilterFilmQuery } from '../store/kinopoisk/kinopoiskApi';
import ContentSection from '../components/ContentSection';

const SeriesPage = () => {

  const {data:series, isLoading:seriesLoading} = useGetFilterFilmQuery('MINI_SERIES')
  return (
    <div className='bg-gray-900 p-4 min-h-screen'>
      <ContentSection data={series} loading={seriesLoading} loadingName='Загрузка сериалов...' sectionName='Сериалы' />
    </div>
  );
};

export default SeriesPage;