import React from 'react'
import CenterComponent from './Center';
import LeftComponent from './Left';
import RightComponent from './Right';

 const HeaderComponent = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
    <LeftComponent />
    <CenterComponent />
    <RightComponent />
    </div>
  )
}

export default HeaderComponent;
