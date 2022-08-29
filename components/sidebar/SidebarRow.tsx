import React from 'react';
import Image from 'next/image';
interface IProps {
  Icon?: any;
  title: string;
  src?: string;
}
const SidebarRow: React.FC<IProps> = ({ Icon, title, src }) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <Image
          src={src}
          alt={title}
          height={30}
          width={30}
          layout='fixed'
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  );
};

export default SidebarRow;
