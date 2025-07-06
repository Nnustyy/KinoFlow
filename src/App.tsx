import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<MainPage/>} />
      </Routes>
    </div>
  );
};

export default App;