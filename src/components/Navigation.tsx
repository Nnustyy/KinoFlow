import React, { useState } from 'react';
import { useSearchFilmsQuery } from '../store/kinopoisk/kinopoiskApi';
import FilmSearchCard from './FilmSearchCard';
import { useDebounce } from '../hooks/debounce';
import Logo from './Logo';
import NavLinkItem from './NavLinkItem';
import SearchInput from './UI/SearchInput';


const Navigation = () => {
  const [search, setSearch] = useState('')
  const debounce = useDebounce(search);
  const {data, isError} = useSearchFilmsQuery(debounce,{
    skip:debounce.length < 3
  });
  const showDropdown = search.length > 1;
  

  const clearInput = () => {
    setSearch('')
  }


  return (
    <nav className='sticky top-0 transition-[250ms] ease-in-out duration-300 bg-[#09090c]'>
      {isError && <h2>Something went wrong..</h2>}
      <div className='mx-auto flex justify-between items-center py-5 max-w-full px-10'>
      <div className='flex items-center gap-24'>
      <Logo/>
      <div className='flex items-center flex-wrap gap-6'>
        <NavLinkItem to='/' children='Главная' />
        <NavLinkItem to='/film' children='Фильмы' />
        <NavLinkItem to='/series' children='Сериалы' />
      </div>
      </div>
      <div className=' relative min-w-2xs'>
        <SearchInput placeholder='Поиск..' value={search} setValue={setSearch}   />
        {search && 
        <button
        onClick={clearInput}
        className="absolute z-60 inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-600"
        aria-label="Очистить"
        >
        ╳
          </button>
        }
        {showDropdown && 
        <ul className='rounded-lg mt-2 flex flex-col list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white z-10 '>
          {data?.map((d) => 
          <FilmSearchCard data={d}  key={d.filmId}  setInputValue={setSearch}/>
          )}
        </ul>
        }
      </div>
      </div>
    </nav>
  );
};

export default Navigation;