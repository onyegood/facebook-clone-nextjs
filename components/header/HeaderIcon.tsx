import React from 'react'

interface IProps {
  Icon: any;
  active: boolean;
}

const HeaderIcon: React.FC<IProps> = ({ Icon, active }) => {
  return (
    <div
      className='flex items-center rounded-xl
      cursor-pointer md:px-10 sm:h-14
      md:hover:bg-gray-100 active:border-b-2
      active:border-blue-200 group'>
      <Icon className={`h-5 text-gray-500 text-center
       group-hover:text-blue-500 sm:h-7 mx-auto
       ${active && 'text-blue-500'}`} />
    </div>

  )
}

export default HeaderIcon;
