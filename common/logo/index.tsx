import React from 'react';
import Image from 'next/image'

export const logoImage = '/logo.png';

const Logo = () => {
  return (
    <Image
      src={logoImage}
      alt='Facebook logo'
      width={40}
      height={40}
      layout='fixed'
    />
  );
}

export default Logo;
