import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import FilmPage from './pages/FilmPage';
import SeriesPage from './pages/SeriesPage';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route  path='/' element={<MainPage/>} />
        <Route  path='/film' element={<FilmPage/>} />
        <Route  path='/series' element={<SeriesPage/>} />
      </Routes>
    </div>
  );
};

export default App;