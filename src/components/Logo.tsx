import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink className='flex justify-center' to='/'>
    <img src="src/assets/logo.png" alt="logo" width='60' />
    <img src="src/assets/projectName.png" alt="projectName" width='170' />
  </NavLink>
  );
};

export default Logo;