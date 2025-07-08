import React, {useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  useSearchUsersQuery } from '../store/kinopoisk/kinopoiskApi';
import FilmSearchCard from './FilmSearchCard';


const Navigation = () => {
  const [search, setSearch] = useState('')
  const {data, isError} = useSearchUsersQuery(search,{
    skip:search.length < 3
  });
  const showDropdown = search.length > 1

  useEffect(() => {
    console.log(data)
  },[data])

  const clearInput = () => {
    setSearch('')
  }


  return (
    <nav className='sticky top-0 transition-[250ms] ease-in-out duration-300 bg-[#09090c]'>
      {isError && <h2>Something went wrong..</h2>}
      <div className='mx-auto flex justify-between items-center py-5 max-w-full px-10'>
      <div className='flex items-center gap-24'>
      <NavLink className='flex justify-center' to='/'>
      <img src="src/assets/logo.png" alt="logo" width='60' />
      <img src="src/assets/projectName.png" alt="projectName" width='170' />
      </NavLink>
      <div className='flex items-center flex-wrap gap-6'>
      <NavLink 
        to='/' 
        className={({ isActive }) => 
      `text-white px-4 py-2 rounded transition-colors ${
        isActive ? "bg-gradient-to-r from-purple-600 to-purple-900" : "hover:bg-purple-900/30"
      }`
    }
  >
    Главная
      </NavLink>
      <NavLink 
        to='/film' 
        className={({ isActive }) => 
      `text-white px-4 py-2 rounded transition-colors ${
        isActive ? "bg-gradient-to-r from-purple-600 to-purple-900 " : "hover:bg-purple-900/30"
      }`
    }
  >
    Фильмы
      </NavLink>
      <NavLink 
        to='/series' 
        className={({ isActive }) => 
      `text-white px-4 py-2 rounded transition-colors ${
        isActive ? "bg-gradient-to-r from-purple-600 to-purple-900" : "hover:bg-purple-900/30"
      }`
    }
  >
    Сериалы
      </NavLink>
      </div>
      </div>
      <div className=' relative min-w-2xs'>
        <input type="text" placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)}  
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
        />
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
          <FilmSearchCard key={d.filmId} data={d} />
          )}
        </ul>
        }
      </div>
      </div>
    </nav>
  );
};

export default Navigation;