import React, {useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  useSearchUsersQuery } from '../store/kinopoisk/kinopoiskApi';
import FilmSearchCard from './FilmSearchCard';


const Navigation = () => {
  const [search, setSearch] = useState('')
  const {data, isError, isLoading} = useSearchUsersQuery(search,{
    skip:search.length < 3
  });
  const showDropdown = search.length > 2

  useEffect(() => {
    console.log(data)
  },[data])


  return (
    <nav className='sticky top-0 transition-[250ms] ease-in-out duration-300 bg-[#09090c]'>
      <div className='mx-auto flex justify-between items-center py-5 max-w-full px-10'>
      <div className='flex items-center gap-24'>
      <NavLink className='flex justify-center' to='/'>
      <img src="src/assets/logo.png" alt="logo" width='60' />
      <img src="src/assets/projectName.png" alt="projectName" width='170' />
      </NavLink>
        <div className='flex items-center flex-wrap gap-6'>
        <NavLink to='/' className='text-white' >Главная</NavLink>
        <NavLink to='/film' className='text-white' >Фильмы</NavLink>
        <NavLink to='/series' className='text-white' >Сериалы</NavLink>
        </div>
      </div>
      <div className=' relative min-w-2xs'>
        <input type="text" placeholder='Поиск..' value={search} onChange={(e) => setSearch(e.target.value)}  
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        {showDropdown && 
        <ul className='flex flex-col list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white z-10 '>
          {data?.map((d) => 
          <FilmSearchCard key={d.id} data={d} />
          )}
        </ul>
        }
      </div>
      </div>
    </nav>
  );
};

export default Navigation;