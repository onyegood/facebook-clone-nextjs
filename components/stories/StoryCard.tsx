import React from 'react';
import Image from 'next/image';
import { Story } from '../../models';

interface IProps {
  story: Story;
}
const StoryCard: React.FC<IProps> = ({ story: { name, src, profile } }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <div className='flex flex-col items-stretch'>
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        alt={name}
      />
      <p className='absolute font-semi z-50 bottom-5 text-white hidden md:inline-flex'>{name}</p>
      </div>
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
        alt={name}
      />
    </div>
  );
};

export default StoryCard;
