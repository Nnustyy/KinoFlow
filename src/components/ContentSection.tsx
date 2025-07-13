import React from 'react';
import type { FilmItem } from '../models/models';
import FilmPreViewCard from './FilmPreViewCard';

interface ContentSectionProps{
  sectionName:string,
  loading:boolean,
  loadingName:string,
  data:FilmItem[] | undefined
}

const ContentSection:React.FC<ContentSectionProps> = ({sectionName, loading, loadingName, data}) => {
  return (
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">{sectionName}</h2>
        {loading ? (
          <div className="text-white">{loadingName}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {data?.map((d) => (
              <FilmPreViewCard film={d} key={d.kinopoiskId} />
            ))}
          </div>
        )}
      </section>
  );
};

export default ContentSection;