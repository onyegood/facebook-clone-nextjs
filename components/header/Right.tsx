import React from 'react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

 const RightComponent = () => {
  return (
   <div className='flex items-center sm:space-x-2 justify-end'>
    {/* Profile pic */}
    <p className='whitespace-nowrap font-sem:bold pr-3'>
      Goodnews Ofoegbu
    </p>
    <ViewGridIcon className='icon' />
    <ChatIcon className='icon' />
    <BellIcon className='icon' />
    <ChevronDownIcon className='icon' />
   </div>
  )
}

export default RightComponent;
