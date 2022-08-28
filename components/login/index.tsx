import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import { logoImage } from '../../common/logo';

 const LoginComponent = () => {
  return (
    <div className='grid place-items-center mt-5'>
      <Image
        src={logoImage}
        alt="Facebook login"
        height={100}
        width={100}
        objectFit='contain'
      />
      <h1
        onClick={() => signIn()}
        className='cursor-pointer mt-5 p-5 text-center bg-blue-500 rounded-full text-white'>
        Login with facebook
      </h1>
    </div>
  );
}

export default LoginComponent;
