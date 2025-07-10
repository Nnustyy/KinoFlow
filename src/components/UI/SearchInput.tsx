import React from 'react';

interface SearchInputProps {
  placeholder:string,
  value:string,
  setValue: (value:string) => void
}

const SearchInput:React.FC<SearchInputProps>  = ({placeholder, value, setValue}) => {
  return (
    <input 
    className='w-full px-4 py-2 rounded-lg border border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/50  transition-all duration-300 text-gray-700 bg-gray-100'
    type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export default SearchInput;