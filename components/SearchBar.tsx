"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import { updateSearchParams } from '@/utils';

interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

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

const SearchBar: React.FC<SearchBarProps> = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }
    
    setModel(searchModel);
    setManufacturer(searchManufacturer);

    let newPathname = updateSearchParams('make', searchManufacturer);
    newPathname = updateSearchParams('model', searchModel);

    console.log('New Pathname:', newPathname);
    window.location.href = newPathname;
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
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
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar_input'
        />
        <SearchButton otherClasses="hidden sm:inline-block" />
      </div>
    </form>
  );
};

export default SearchBar;
