"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import { updateSearchParams } from '@/utils';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-0 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={30}
      height={30}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    updateSearchParams(
      model.toLowerCase(),
  manufacturer.toLowerCase())

    let newPathname = updateSearchParams('make', manufacturer);
    newPathname = updateSearchParams('model', model);
  
    console.log('New Pathname:', newPathname); // Debugging
  
    window.location.href = newPathname;
  };




  
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='searchbar_item flex items-center'>
        <Image
          src="/model-icon.png"
          alt='model icon'
          width={25}
          height={25}
          className='w-[20px] h-[20px] mr-2'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar_input'
        />
        <SearchButton otherClasses="hidden sm:inline-block" />
      </div>
    </form>
  );
}

export default SearchBar;
