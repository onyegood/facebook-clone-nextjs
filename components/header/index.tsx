import React from 'react'
import CenterComponent from './Center';
import LeftComponent from './Left';
import RightComponent from './Right';

 const HeaderComponent = () => {
  return (
    <div className='sticky top-0 z-50 bg-white
    flex flex-row justify-between items-center p-2 lg:px-5 shadow-md'>
    <LeftComponent />
    <CenterComponent />
    <RightComponent />
    </div>
  )
}

export default HeaderComponent;
