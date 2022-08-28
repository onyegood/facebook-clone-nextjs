import React from 'react';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import { useSession, signOut } from 'next-auth/react';

const RightComponent = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center sm:space-x-2 justify-end">
      <Image
        src={session?.user?.image!}
        alt="Facebook login"
        height={40}
        width={40}
        objectFit="contain"
        className='rounded-full'
        onClick={() => signOut()}
      />
      <p className="whitespace-nowrap font-sem:bold pr-3">
        {session?.user?.name}
      </p>
      <ViewGridIcon className="icon" />
      <ChatIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  );
};

export default RightComponent;
