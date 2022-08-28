import React from 'react';
import {
  SearchIcon
} from '@heroicons/react/outline';

import Logo from '../../common/logo';

const LeftComponent = () => {
  return (
    <div className='flex items-center'>
      <Logo />
      <div className='flex ml-2 items-center rounded-full'>
        <SearchIcon className='h-6' />
        <input placeholder='Search here...' />
      </div>
    </div>
  );
};

export default LeftComponent;
