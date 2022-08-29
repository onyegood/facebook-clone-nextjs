import React from 'react';
import { stories } from '../../common/data/stories';
import StoryCard from './StoryCard';

const StoriesComponent = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map(story => <StoryCard story={story} key={story.id} />)}
    </div>
  );
}

export default StoriesComponent;
