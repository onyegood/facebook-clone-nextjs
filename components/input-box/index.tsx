import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

const InputBox = () => {
  const { data: session } = useSession();
  const sendPost = (e: any) => {
    e.preventDefault();
    alert('Hello bro!');
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6 font-medium'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          src={session?.user?.image!}
          alt={session?.user?.name!}
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full"
        />
        <form
          className='flex flex-1'
          onSubmit={sendPost}>
          <input
            type='text'
            placeholder={`What's on your mind, ${session?.user?.name}`}
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
          />
        </form>
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
