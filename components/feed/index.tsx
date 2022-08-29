import React from 'react';
import InputBox from '../input-box';
import StoriesComponent from '../stories';

const FeedComponent = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <StoriesComponent />
        <InputBox />
        {/* Posts */}
      </div>
    </div>
  );
};

export default FeedComponent;
