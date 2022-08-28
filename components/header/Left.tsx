import React from 'react';
import {
  SearchIcon
} from '@heroicons/react/outline';

import Logo from '../../common/logo';

const LeftComponent = () => {
  return (
    <div className='flex items-center'>
      <Logo />
      <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
        <SearchIcon className='h-6 text-gray-600' />
        <input
          placeholder='Search here...'
          className='hidden md:inline-flex flex ml-2 items-center bg-transparent focus:outline-none placeholder-gray-500 flex-shrink'
          type='text'
        />
      </div>
    </div>
  );
};

export default LeftComponent;
