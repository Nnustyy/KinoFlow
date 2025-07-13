import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink className='flex justify-center items-center gap-1.5' to='/'>
    <img src="/src/assets/logo.png" alt="logo" width='60' />
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          KinoFlow
        </h1>
  </NavLink>
  );
};

export default Logo;