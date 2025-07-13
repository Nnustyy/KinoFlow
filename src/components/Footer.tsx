import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            KinoFlow
          </span>
          <p className="text-gray-400 mt-2">Лучший кинотеатр в вашем кармане</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">О нас</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Контакты</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Правообладателям</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;