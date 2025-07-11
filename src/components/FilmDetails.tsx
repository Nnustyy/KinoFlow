import React from 'react';

interface FilmDetailsProps {
  info?: string,
  value:string | number
}

const FilmDetails:React.FC<FilmDetailsProps> = ({info, value}) => {
  return (
    <p className='className="text-lg mb-1"'>
      {info 
      ? <span className='font-semibold'>{info}: {value}</span>
      : <span className='font-semibold'>{value}</span>
      }
    </p>
  );
};

export default FilmDetails;