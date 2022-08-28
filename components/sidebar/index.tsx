import React from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const SidebarComponent = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div>
      <Image
        src={session?.user?.image!}
        alt="Facebook login"
        height={30}
        width={30}
        objectFit="contain"
        className='rounded-full'
      />
      <p className="whitespace-nowrap pr-3">
        {session?.user?.name}
      </p>
      </div>
    </div>
  )
}

export default SidebarComponent;
